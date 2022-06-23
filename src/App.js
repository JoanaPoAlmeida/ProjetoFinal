//yarn start
import './App.css';
import { useState,useEffect } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Switch --> Routes
import Home from './pages';
import Entity from './pages/Entity';
import Keywords from './pages/Keywords';
import POS from './pages/POS';
import Sum from './pages/Sum';
import LangDetect from './pages/LangDetect';
import Start from './pages/start';
import ArticleList from './components/ArticleList'
import Form from './components/Form'

function App() {

  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);


  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(()=>{
    fetch('http://localhost:5000/articles',{
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
    <>
      <Router>
        <Home />
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/Entity' element={<Entity/>}/>
          <Route path='/POS' element={<POS/>}/>
          <Route path='/Keywords' element={<Keywords/>}/>
          <Route path='/LangDetect' element={<LangDetect/>}/>
          <Route path='/Sum' element={<Sum/>}/>
        </Routes>
      </Router>
      
      
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
            {showForm && (<Form insertedArticle={insertedArticle}/>)}
        </div>
      

    </>
  );
}

export default App;
