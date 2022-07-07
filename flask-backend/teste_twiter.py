from typing import Counter

#from flask.templating import DispatchingJinjaLoader
import tweepy
import pandas as pd
import datetime as DT
import regex
import os

from algoritmo_polaridade import algoritmo_polaridade,extreme_polaridade,normal_polaridade
from polyglot.text import Text, Word
from polyglot.detect import Detector
from datetime import datetime

def four_plaritys(lista):
    EN = []
    N = []
    Neut = []
    P = []
    EP = []
    for x in lista:
        if(x[3] == "Extreme Negative"):
            EN.append("Tweet:" + str(x[0]) + ", User Name: " + str(x[1]) + ", Date: " + str(x[2]) +", Polarity: " + x[3])
        if(x[3] == "Negative"):
            N.append("Tweet:" + str(x[0]) + ", User Name: " + str(x[1]) + ", Date: " + str(x[2]) +", Polarity: " + x[3])  
        if(x[3] == "Neutral"):
            Neut.append("Tweet:" + str(x[0]) + ", User Name: " + str(x[1]) + ", Date: " + str(x[2]) +", Polarity: " + x[3])
        if(x[3] == "Positive"):
            P.append("Tweet:" + str(x[0]) + ", User Name: " + str(x[1]) + ", Date: " + str(x[2]) +", Polarity: " + x[3])
        if(x[3] == "Extreme Positive"):
            EP.append("Tweet:" + str(x[0]) + ", User Name: " + str(x[1]) + ", Date: " + str(x[2]) +", Polarity: " + x[3])  
    #print((EN,N,P,EP))
    return (EP,P,Neut,N,EN)

def four_plaritysv2(lista):
    EN = []
    N = []
    Neut = []
    P = []
    EP = []
    #print("print da lista \n")
    for x in lista:
        #print(x)
        """
        # Get last 3 character
        last_chars = sample_str[-3:]
        """
        if  x[-8:] == "Neutral.":
            Neut.append(x)
        elif x[-9:] == "Negative.":
            N.append(x)
        elif x[-9:] == "Positive.":
            P.append(x)
        elif x[-17:] ==  "Positive Extreme.":
            EP.append(x)
        elif x[-16] == "Negative Extreme." :
            EN.append(x)  
    #print("1",(EP,P,Neut,N,EN))
    return (EP,P,Neut,N,EN)

def numero_para_escrito(x):
    polaridade = ""
    if x == 2:
        polaridade = "Extreme Positive"
    elif x == 1:
        polaridade = "Positive"
    elif x == 0:
        polaridade = "Neutral"
    elif x == -1:
        polaridade = "Negative"
    else:
        polaridade = "Extreme Negative"

    return polaridade   

def escrever_ficheiro(nome,lista,name):
    save_path = 'static/Tweeter_files'
    file_name = nome+ "-"+name+".txt"
    completeName = os.path.join(save_path, file_name)
    #print(completeName)
    with open(completeName, 'w', encoding="utf-8") as f:
        for x in lista:
            f.write(x)
            f.write("\n---------------------------------------------------")
                 
RE_BAD_CHARS = regex.compile(r"\p{Cc}|\p{Cs}")

def remove_bad_chars(text):
    return RE_BAD_CHARS.sub("", text)

def separar_data(data):
    ano = ""
    mes = ""
    dia =""
    hora =""
    minuto = ""
    segundos = ""
    #print(data)
    for i in range(20):
        if i < 4:  
            ano = ano + data[i]
        elif i >4 and i < 7:    
            mes = mes + data[i]
        elif i > 7 and i < 10:    
            dia = dia + data[i]
    #print("ano: " +ano +" mes: "+ mes + " dia: " + dia + " hora: " + hora + " minuto: " + minuto + " segundos: " + segundos)
    #print (int(ano),int(mes))
    if(int(dia) != 0):
        return (int(ano),int(mes),int(dia))
    else:
        return (int(ano),int(mes),int(dia))    

def _datas_():
    date_list=[]

    for y in range(7):
        today = DT.date.today()
        week_ago = today - DT.timedelta(days=y)
        timestampStr = week_ago.strftime("%Y-%m-%d")
        #print(timestampStr)
        date_list.append(timestampStr)
    return date_list

def verifica(new_polarity):
    if(new_polarity <= -2):
        return-2
    elif(new_polarity <= -1):
       return -1
    elif(new_polarity == 0):
        return 0
    elif(new_polarity >=2):
        return 2
    else:
        return 1

TwitterConsumerKey = "I6hqZsFfiEsTrhC8o173Gxwpk"
TwitterConsumerSecret = "M77JRsZJpcL4158EN0GjGhINiTpUFzjUNuU977vKBK50ljczo2"
TwitterAccessToken = "1114111475340271616-ctFfEsYvJK1bw0CyKTftUDH8QaSZ9W"
TwitterAccessTokenSecret = "KNnFfdjI4O62XQH3kHQ2jHT8Q1PFnxfEeQPUBn3FEwQDx"
auth = tweepy.OAuthHandler(TwitterConsumerKey, TwitterConsumerSecret)
auth.set_access_token(TwitterAccessToken, TwitterAccessTokenSecret)
api = tweepy.API(auth,wait_on_rate_limit=True)

def lista_twitter(topico,data1,data2,api):
    lista = []
    number_of_tweets = 50
    count = 0
    list_lang_code = ['zh-cn','zh-tw','zh_Hant','zh','ko','cs','ja','sv','ru','it','sr','nl','el','bg','sk','sl','uk','tr','hr','lt','ro','pl','no','de','en','fr','es','pt','da','et','fi','ht','hu','is']
    list_lang_code_error = ['undefined','gn' ,'zzp','xh','sn','kha','un','jw','co','rw','rn','bi','ny','mi','iw','zh_Hant','st','ie','tlh','kl','aa','mfe','zu','om','ln','ig','za','lg','wo','na','tn','so','bh','ha','ay','hmn','sd','ak','ts','to','ss','fj','lo','xx_Egyp','crs','ve','sm','xx_Qaai','nso','haw','sg','ik','chr', 'xx_Xsux','ks','iu','xx_Ital','xx_Tfng','xx_Bamu','xx_Hano','xx_Lisu','ti','dz','nr' ]
    try:
        for i in tweepy.Cursor(api.search , q = topico , tweet_mode = "extended", since=data2, until=data1).items(number_of_tweets):
            #print("{0}".format(count), end='; ')
            
            tweets = str(i.full_text)
            #print(tweets)
            tweets = remove_bad_chars(tweets)
            #l_code = Text(tweets).language.code
            detector = Detector(tweets,quiet=True)
            l_code = str(detector.language.code)
            #print(tweets)
            #if(l_code in    ['en','fr','es','pt','bg','de'
              #              'et','fi','ht','hu','hy','is','ka', 
               #             'lt','ne' ]): 
            if list_lang_code.count(l_code) > 0:
                                #quando por no servidor tirar 'no' , 'ro' , 'fa',alterar para quando passar para o server substituir este if pelo o do polyglot
                location = i.user.location
                location_aux=str(location).split(", ")
                country=""
                nome = i.user.name
                #count += 1
                #print(l_code)
                if (len(location_aux) == 1):
                    country = location_aux

                elif (len(location_aux) == 2):
                    country = location_aux[1]

                tweets = str(i.full_text)
                lista.append([tweets,l_code,country,data2,nome])
        #print("END of lista_twitter")
        return lista
    except Exception:
        return [] 

def final(lista,st,tam,date):#st -> onde começa na lista
    #print(date, end=': ')
    new_list =[]
    new_date = separar_data(date)
    data = str(new_date[0])+"-"+str(new_date[1])+"-"+str(new_date[2])
    lista_paises = [['Afghanistan',0],['Åland Islands',0],['Albania',0],['Algeria',0],['American Samoa',0],['Andorra',0],['Angola',0],['Anguilla',0],['Antarctica',0],
            ['Antigua and Barbuda',0],['Argentina',0],['Armenia',0],['Aruba',0],['Australia',0],['Austria',0],['Azerbaijan',0],['Bahamas',0],['Bahrain',0],['Bangladesh',0],
            ['Barbados',0],['Belarus',0],['Belgium',0],['Belize',0],['Benin',0],['Bermuda',0],['Bhutan',0],['Bolivia',0],['Bonaire, Sint Eustatius and Saba',0]
            ,['Bosnia and Herzegovina',0],['Botswana',0],['Bouvet Island',0],['Brazil',0],['British Indian Ocean Territory',0],['Brunei Darussalam',0],['Bulgaria',0],['Burkina Faso',0]
            ,['Burundi',0],['Cabo Verde',0],['Cambodia',0],['Cameroon',0],['Canada',0],['Cayman Islands',0],['Central African Republic',0],['Chad',0],['Chile',0],['China',0]
            ,['Christmas Island',0],['Cocos (Keeling) Islands',0],['Colombia',0],['Comoros',0],['Democratic Republic of the Congo',0],['Republic of the Congo',0],['Cook Islands',0]
            ,['Costa Rica',0],['CI',0],['Croatia',0],['Cuba',0],['Curaçao',0],['Cyprus',0],['Czech Republic',0],['Denmark',0],['Djibouti',0],['Dominica',0],
            ['Dominican Republic',0],['Ecuador',0],['Egypt',0],['El Salvador',0],['Equatorial Guinea',0],['Eritrea',0],['Estonia',0],['Ethiopia',0],['Falkland Islands (Malvinas)',0]
            ,['Faroe Islands',0],['Fiji',0],['Finland',0],['France',0],['French Guiana',0],['French Polynesia',0],['French Southern Territories',0],['Gabon',0],['Gambia',0]
            ,['Georgia',0],['Germany',0],['Ghana',0],['Gibraltar',0],['Greece',0],['Greenland',0],['Grenada',0],['Guadeloupe',0],['Guam',0],['Guatemala',0],['Guernsey',0]
            ,['Guinea',0],['Guinea-Bissau',0],['Guyana',0],['Haiti',0],['Heard Island and McDonald Islands',0],['Holy See',0],['Honduras',0],['Hong Kong',0],['Hungary',0],
            ['Iceland',0],['India',0],['Indonesia',0],['Iran',0],['Iraq',0],['Ireland',0],['Isle of Man',0],['Israel',0],['Italy',0],['Jamaica',0],
            ['Japan',0],['Jersey',0],['Jordan',0],['Kazakhstan',0],['Kenya',0],['Kiribati',0],['Korea (Democratic Peoples Republic of)',0],['Korea (Republic of)',0],
            ['Kuwait',0],['Kyrgyzstan',0],['Lao Peoples Democratic Republic',0],['Latvia',0],['Lebanon',0],['Lesotho',0],['Liberia',0],['Libya',0],['Liechtenstein',0],
            ['Lithuania',0],['Luxembourg',0],['Macao',0],['Macedonia (the former Yugoslav Republic of)',0],['Madagascar',0],['Malawi',0],['Malaysia',0],['Maldives',0],
            ['Mali',0],['Malta',0],['Marshall Islands',0],['Martinique',0],['Mauritania',0],['Mauritius',0],['Mayotte',0],['Mexico',0],['Micronesia (Federated States of)',0]
            ,['Moldova (Republic of)',0],['Monaco',0],['Mongolia',0],['Montenegro',0],['Montserrat',0],['Morocco',0],['Mozambique',0],['Myanmar',0],['Namibia',0],['Nauru',0]
            ,['Nepal',0],['Netherlands',0],['New Caledonia',0],['New Zealand',0],['Nicaragua',0],['Niger',0],['Nigeria',0],['Niue',0],['Norfolk Island',0],['Northern Mariana Islands',0]
            ,['Norway',0],['Oman',0],['Pakistan',0],['Palau',0],['Palestine, State of',0],['Panama',0],['Papua New Guinea',0],['Paraguay',0],['Peru',0],['Philippines',0],['Pitcairn',0]
            ,['Poland',0],['Portugal',0],['Puerto Rico',0],['Qatar',0],['Réunion',0],['Romania',0],['Russia',0],['Rwanda',0],['Saint Barthélemy',0],
            ['Saint Helena, Ascension and Tristan da Cunha',0],['Saint Kitts and Nevis',0],['Saint Lucia',0],['Saint Martin (French part)',0],['Saint Pierre and Miquelon',0],
            ['Saint Vincent and the Grenadines',0],['Samoa',0],['San Marino',0],['Sao Tome and Principe',0],['Saudi Arabia',0],['Senegal',0],['Serbia',0],['Seychelles',0],
            ['Sierra Leone',0],['Singapore',0],['Sint Maarten (Dutch part)',0],['Slovakia',0],['Slovenia',0],['Solomon Islands',0],['Somalia',0],['South Africa',0],
            ['South Georgia and the South Sandwich Islands',0],['South Sudan',0],['Spain',0],['Sri Lanka',0],['Sudan',0],['Suriname',0],['Svalbard and Jan Mayen',0],
            ['Swaziland',0],['Sweden',0],['Switzerland',0],['Syrian Arab Republic',0],['Taiwan, Province of China[a]',0],['Tajikistan',0],['Tanzania, United Republic of',0],
            ['Thailand',0],['Timor-Leste',0],['Togo',0],['Tokelau',0],['Tonga',0],['Trinidad and Tobago',0],['Tunisia',0],['Turkey',0],['Turkmenistan',0],['Turks and Caicos Islands',0],
            ['Tuvalu',0],['Uganda',0],['Ukraine',0],['United Arab Emirates',0],['United Kingdom',0],['United States',0],
            ['United States Minor Outlying Islands',0],['Uruguay',0],['Uzbekistan',0],['Vanuatu',0],['Venezuela',0],['Viet Nam',0],['Virgin Islands (British)',0]
            ,['Virgin Islands (U.S.)',0],['Wallis and Futuna',0],['Western Sahara',0],['Yemen',0],['Zambia',0],['Zimbabwe',0]]#18 paises
    lista_tweets = []
    
    for i in range(st,tam):
            try:
                polaridade=0
                polaridade_extreme=0
                polaridade = normal_polaridade(remove_bad_chars(lista[i][0]))
                polaridade_extreme = extreme_polaridade(remove_bad_chars(lista[i][0]),lista[i][1])
                if polaridade_extreme==2 or polaridade_extreme==-2:
                    polaridade=polaridade_extreme
                '''polaridade = extreme_polaridade(remove_bad_chars(lista[i][0]),lista[i][1])#algoritmo_polaridade(tweets,path)
                if(polaridade == 0):#no futuro ver primeiro se o extreme sentilex aguenta
                    polaridade = normal_polaridade(remove_bad_chars(lista[i][0]))'''
            except Exception:
                polaridade=0

            pp = polaridade
            #print(pp)
            country = lista[i][2]
            nome = lista[i][4]
            tweet = lista[i][0]
            texto = ("\nTweet:" + tweet +"\nUser: " +  nome + "\nDate: " + data + "\nPolarity: " + numero_para_escrito(pp)+".")

            if(len(new_list) != 0):   
                new_polarity = polaridade + new_list[0][0]
                polaridade = verifica(new_polarity)
                new_list[0][0] = polaridade
                
                lista_tweets.append([numero_para_escrito(pp),country,nome,tweet,texto,pp])

                for x in lista_paises:
                    if (x[0] == country ):
                        x[1] = verifica(x[1] + pp)
                        #print(country, x[1])
                    
            else: 
                new_list.append([polaridade,data,lista_paises,lista_tweets])#date tem de ser o data2
                lista_tweets.append([numero_para_escrito(pp),country,nome,tweet,texto,pp])
    #print("hello?")
    #print(lista_paises)
    return new_list
       
