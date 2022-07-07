from flask import current_app,jsonify,request, Flask
from app import create_app
from gensim.summarization import keywords
from gensim.summarization import summarize
from polyglot.text import Text
from langdetect import detect
from multi_rake import Rake
from algoritmo_polaridade import normal_polaridade,extreme_polaridade
from teste_twiter import numero_para_escrito
from polyglot.detect import Detector
from gensim.summarization.textcleaner import clean_text_by_sentences as _clean_text_by_sentences


# Create an application instance
app = create_app()

#Falta criar rotas para cada serviço e associa-las as paginas

body = ""
@app.route("/langDetect", methods=['POST'])
def lang():

	if request.method == 'POST':
		global body
		body = request.json['body']
		

	if body == "":
		return ""
	else:
		lang = detect(body)
		#print("this is lang", lang)
		#print("this is body", body)
		return jsonify(lang)



keywrds = ""
@app.route("/keywords", methods=['POST'])
def keyword():
	global keywrds
	keywrds = request.json['body']
	if keywrds == "":
		return ""
	else:
		#print(keywrds)
		rake = Rake()
		key = rake.apply(keywrds)
		#print("this is keywords", key)
		#print("this is body", keywrds)
		return jsonify(key)


summ = ""
@app.route("/summary", methods=['POST'])
def sum():
	global summ
	summ = request.json['body']
	print(summ)
	sentences = _clean_text_by_sentences(summ)
	print(sentences)
	#Se não houver input
	if len(sentences) == 0:
		return ""
	if len(sentences) == 1:
		summar = "The text must have more than one sentence."
		return jsonify(summar)
	else:
		print(summ)
		summar = summarize(summ)
		#Se o texto sumarizado for nulo
		if summar == "":
			summar="The text is too short to summarize."
		#print(summar)
		return jsonify(summar)


summ = ""
@app.route("/entity", methods=['POST'])
def NER():
	global summ
	summ = request.json['body']
	if summ == "":
		return ""
	else:
		text = Text(summ, hint_language_code = detect(summ))
		aux = ""
		for entity in text.entities:
			aux = aux + str(entity.tag) + " " + str(entity) + ""
			print("before if" + aux)
		if aux == "":
			aux = "There are no Named Entities to Recognize"
		#print(summ)
		#print(aux)
		return jsonify(aux)
	
summ = ""
@app.route("/POS", methods=['POST'])
def POS():
	global summ
	summ = request.json['body']
	if summ == "":
		return ""
	else:
		txt = Text(summ)
		aux = txt.pos_tags
		#print(summ)
		#print(aux)
		return jsonify(aux)
	
@app.route("/Sentilex", methods=['POST'])
def Sentilex():
	global body
	body = request.json['body']
	if body == "":
		return ""
	else:
		list_lang_code = ['zh-cn','zh-tw','zh_Hant','zh','ko','cs','ja','sv','ru','it','sr','nl','el','bg','sk','sl','uk','tr','hr','lt','ro','pl','no','de','en','fr','es','pt','da','et','fi','ht','hu','is']
		list_lang_code_error = ['undefined','gn' ,'zzp','xh','sn','kha','un','jw','co','rw','rn','bi','ny','mi','iw','zh_Hant','st','ie','tlh','kl','aa','mfe','zu','om','ln','ig','za','lg','wo','na','tn','so','bh','ha','ay','hmn','sd','ak','ts','to','ss','fj','lo','xx_Egyp','crs','ve','sm','xx_Qaai','nso','haw','sg','ik','chr', 'xx_Xsux','ks','iu','xx_Ital','xx_Tfng','xx_Bamu','xx_Hano','xx_Lisu','ti','dz','nr' ]
		resultado = 0
		resultado_extreme = 0
		try:
			detector = Detector(body,quiet=True)
			lang_code = str(detector.language.code)
			if lang_code not in list_lang_code_error:
				resultado = normal_polaridade(body)
			if list_lang_code.count(lang_code) > 0:
				resultado_extreme = extreme_polaridade(body,lang_code)
			if resultado_extreme==2 or resultado_extreme==-2:
				resultado=resultado_extreme
		except Exception as ex:
			resultado = 0
		n = numero_para_escrito(resultado)
		return jsonify(n)



if __name__ == "__main__":
	app.run(host='10.0.1.204', port=5000, debug=True)