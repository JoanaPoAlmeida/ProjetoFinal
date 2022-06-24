import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import Form from '../components/Form'


function LangDetect() {
  //set default value to null
  let [langdetect, setlangdetect] = useState(null);
  const [showForm, setShowForm] = useState(true);

  //fetch data from flask and set it to langdetect
  useEffect(()=>{
    fetch('http://localhost:5000/langDetect',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setlangdetect(response))
    .catch(error => console.log(error))
  },[])

  //apresentar a variavel apenas se tiver conteudo ou apresentar a variavel depois do post (ver como fazer isso)
  function showGet(){
    if(langdetect ){
      console.log("this is langdetect in react", langdetect)
      return langdetect;
    }else{
      return "";
    }
  }
  
  console.log(langdetect)

  return (
    <>
    <div className="container">
      <div className="row p-3">
        <div className="text-center"> 
          {showForm && (<Form />)}
          {showGet}
        </div>
      </div>
    </div>
    </>
      
    
  );
  
}

export default LangDetect