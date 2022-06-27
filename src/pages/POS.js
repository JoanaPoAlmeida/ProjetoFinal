import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import APIService from '../components/APIService'
function POS() {

  
  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')

  //fetch data from flask and set it to langdetect
  /*useEffect((props)=>{
    fetch('http://localhost:5000/keywords',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  },[])*/

  const insertText = () =>{
    APIService.InsertKeywords({body})
    .then((response) => setShowText(response))
    .catch(error => console.log('error',error))
  }

  //insere o texto, limpa o form e atualiza a pagina
  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertText()
    //setBody('')
    console.log("this is from handleSubmit", showText)
    //window.location.reload(false);
  }
  const TextArea = (e) => {
    setBody('e.target.value')
    setShowText("")
  }

  return (
    <>
    <div className="container">
      <div className="row p-2">
        <p>The Part of Speech library is a </p>
        <p></p>
      </div>
      <div className="row p-3">
        <div className="text-center"> 
          {/*showForm && (<Form insertedText={results}/>)*/}
          {/*showGet && (<p>The TextCode for this language is: {langdetect}</p>)*/}
          <form onSubmit = {handleSubmit}>

          <label htmlFor="body" className="form-label">Insert your text here</label>
          <textarea 
          className="form-control" 
          placeholder ="Enter body" 
          rows='6'
          value={body}
          onChange={TextArea}
          required
          >
          </textarea>

          <button 
          className="btn btn-primary mt-2"
          >
          Send</button>
        </form>
        <div className="row p-4">
          <h3>Results: {showText} </h3>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default POS