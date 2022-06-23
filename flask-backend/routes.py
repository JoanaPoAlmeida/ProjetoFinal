from flask import current_app,jsonify,request, Flask
from app import create_app,db
from models import Articles,articles_schema,article_schema
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
@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():

	body = request.json['body']
	

	article = Articles(
		body=body
		)
	
	test = summarize(article.body, split=True)
	print(test)
	db.session.add(article)
	db.session.commit()

	return article_schema.jsonify(article)

@app.post("/POSTlangDetect")
def postlang():
	body = request.json['body'] #isto ta a funcionar mas agora eu queria enviar para o utilizador o texto analisado, mas acho
	#que nao é possivel fazer isso sem base de dados
	#mas se usar base de dados nao ha como saber qual linha é do utilizador
	send = "EU QUERIA QUE DESSE PARA FAZER O RETRIEVE DOS DADOS DO INPUT DO UTILIZADOR AQUI"
	print(body)
	return body

body = ""
@app.route("/langDetect", methods=['GET', 'POST'])
def lang():

	if request.method == 'POST':
		global body
		body = request.json['body']

	if body == "":
		return ""
	lang = detect(body)
	print("this is lang", lang)
	print("this is body", body)
	return jsonify(lang)


#isto em baixo afinal nao é preciso
@app.route("/con")
def con():
	conn = pyodbc.connect('Driver={SQL Server};'
                    	'Server=DESKTOP-1F9L5HH\SQLEXPRESS01;'
                      	'Database=FinalProj;'
                      	'Trusted_Connection=yes;')

	cursor = conn.cursor()
	a=cursor.execute('SELECT * FROM UserInput')


	for row in a:
		if(row.service == 'summarize'):
			lang = detect(row.body)
			
			return(lang)


	
	return "hihi"


	
	



if __name__ == "__main__":
	app.run(debug=True)