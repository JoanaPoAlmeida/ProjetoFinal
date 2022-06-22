import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import ArticleList from '../components/ArticleList'
import Form from '../components/Form'

function Entity() {

  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(()=>{
    fetch('http://localhost:5000/Articles',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))

  },[])

  const insertedArticle = (article) =>{
    const new_articles = [...articles,article]
    setArticles(new_articles)
  }

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }
  return (
    <div>
      <div className="Entity">
        <div className="container">
          <div className="row p-3">
            <div className="text-center">
              <h1>Post data from React to Flask.</h1>
              {toggleShowForm}
              <button onClick={toggleShowForm} className="btn btn-primary"> Write an article
              <i className="bi bi-pencil-square m-2"></i>
              </button>
            </div>
          </div>
          <ArticleList articles={articles} />
          {showForm && (<Form insertedArticle={insertedArticle}/>)}
        </div>
      </div>
    </div>

  )
}

export default Entity