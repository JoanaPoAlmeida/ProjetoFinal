import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import APIService from '../components/APIService'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import '../App.css';
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


var JSONPrettyMon = require('react-json-pretty/dist/monikai');



function POS() {

  
  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')
  const [spinner, setSpinner] = useState(false);

  const insertText = () =>{
    setSpinner(true);
    APIService.InsertPOS({body})
    .then((response) => setShowText(response))
    .then((response) => setSpinner(false))
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
    setBody(e.target.value)
    setShowText("")
  }

  return (
    <>
    <div className="container">
      <div className="row p-2">
        <h2>Part of Speech</h2>
        <p>The Part of Speech is a service that will tell you all the parts of speech included in your text. </p>
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
          placeholder ="Enter text here" 
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
        {spinner && (
        <div><TripleMaze/></div>
        )}
        <div className="row p-4">
        {showText.length > 0 ? (<span><label className="form-label">Results:</label><div className="form-control"><p>{JSON.stringify(showText)}</p> </div></span>) : null
        }
         
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default POS