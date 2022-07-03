from flask import current_app,jsonify,request, Flask
from app import create_app
from gensim.summarization import keywords
from gensim.summarization import summarize
from polyglot.text import Text
import pyodbc
from langdetect import detect
from multi_rake import Rake


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
		print("this is lang", lang)
		print("this is body", body)

		return jsonify(lang)



keywrds = ""
@app.route("/keywords", methods=['POST'])
def keyword():
	global keywrds
	keywrds = request.json['body']
	if keywrds == "":
		return ""
	else:
		print(keywrds)
		rake = Rake()
		key = rake.apply(keywrds)
		print("this is keywords", key)
		print("this is body", keywrds)
		return jsonify(key)


summ = ""
@app.route("/summary", methods=['POST'])
def sum():
	global summ
	summ = request.json['body']
	#Se não houver input
	if summ == "":
		return ""
	else:
		print(summ)
		summar = summarize(summ)
		#Se o texto sumarizado for nulo
		if summar == "":
			summar="The text is too short to summarize."
	print(summar)
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
			aux = "There are no entities"
			
		print(summ)
		print(aux)
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
		print(summ)
		print(aux)
		return jsonify(aux)
	
@app.route("/Sentilex", methods=['POST'])
def Sentilex():
	global body
	body = request.json['body']
	if body == "":
		return ""
	else:
		#INSERIR ANALISE DE SENTIMENTOS AQUI
		return jsonify(body)



if __name__ == "__main__":
	app.run(host='10.0.1.204', port=5000, debug=True)