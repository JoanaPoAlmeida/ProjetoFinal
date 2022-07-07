from os import path
from polyglot.text import Text, Word
from ScriptExtremismDetection import analyseSentece
from polyglot.detect import Detector

#função que calcula a polaridade de uma frase, em que os valores podem ser [-1,0,1] , o que significa que se devolver -1 ,então a frase tem um sentimento negativo,0 é neutro e 1 é positivo
def normal_polaridade(texto):
    
    zen = Text(texto)
    #print (zen.language.code)
    #print("{:<16}{}".format("Word", "Polarity")+"\n"+"-"*30)
    count = 0
    total=0
    for w in zen.words:
        #print("{:<16}{:>2}".format(w, w.polarity))   
        total = total + w.polarity
        count = count +1

    fim = total / count

    if fim != 0:
        if fim < 0:
            return -1
        else:
            return 1
    else:
        return 0    
    

#print(normal_polaridade('sua puta de merda'))

#função para calcular se a frase é extremamente positiva ou extremamente negativa.
def extreme_polaridade(texto,lan_code):
    #texto_tag = Text(texto).language.code
    resposta=''
    file_ = "static/Lexicon/Lexicon_"+lan_code+".txt"
    if  (lan_code == 'en'):
        resposta = analyseSentece(texto,'static/Lexicon/ExtremeSentiLex.txt')
    else: 
        resposta = analyseSentece(texto,file_)

    if resposta == "Positive Extreme":
        return 2 
    elif resposta == "Negative Extreme":
        return -2
    else: 
        return 0   

#print(extreme_polaridade("fuck shit acne badly"))
#função que faz o que as duas funções anteriores conjuntas
def algoritmo_polaridade (texto_polaridade,path):
    zen = Text(texto_polaridade)
    fim = zen.polarity
    resposta = analyseSentece(texto_polaridade,path)

    if resposta == "Positive Extreme":
        return 2 
    elif resposta == "Negative Extreme":
        return -2
    elif fim != 0:
        if fim < 0:
            return -1
        else:
            return 1
    else:
        return 0    
    