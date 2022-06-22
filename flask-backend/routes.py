from flask import current_app,jsonify,request
from app import create_app,db
from models import Articles,articles_schema,article_schema
from polyglot.text import Text
from gensim.summarization.summarizer import summarize
from gensim.summarization import keywords

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

@app.route("/delete", methods=["POST"], strict_slashes=False)
def delete():
	articles = Articles.query.all()
	try:
		db.session.delete(articles)
		db.session.commit()
		return("deleted wow")
	except:
		return("something went wrong")
	
	



if __name__ == "__main__":
	app.run(debug=True)