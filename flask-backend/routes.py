from flask import current_app,jsonify,request, Flask
from app import create_app,db
from models import Articles,articles_schema,article_schema
from gensim.summarization import keywords
from gensim.summarization import summarize
from polyglot.text import Text
import pyodbc
from langdetect import detect


# Create an application instance
app = create_app()

# Define a route to fetch the avaialable articles
@app.route('/')
def hello():
    return 'Hello, World!'

@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

	articles = Articles.query.all()
	results = articles_schema.dump(articles)

	return jsonify(results)

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
		key = keywords(keywrds).replace('\n','#')
		print("this is keywords", key)
		print("this is body", keywrds)
		return jsonify(key)


summ = ""
@app.route("/summary", methods=['POST'])
def sum():
	global summ
	summ = request.json['body']
	if summ == "":
		return ""
	else:
		print(summ)
		summar = summarize(summ)
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
	



if __name__ == "__main__":
	app.run(debug=True)