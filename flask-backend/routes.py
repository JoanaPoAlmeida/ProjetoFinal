from flask import current_app,jsonify,request, Flask
from app import create_app,db
from models import Articles,articles_schema,article_schema
from gensim.summarization import keywords
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
"""
@app.route("/keywords", methods=['GET', 'POST'])
def lang():

	if request.method == 'POST':
		global body
		body = request.json['body']

	if body == "":
		return ""
	key = keywords(body)
	print("this is keywords", key)
	print("this is body", body)

	return jsonify(key)
"""

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