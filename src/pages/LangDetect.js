import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import Form from '../components/Form'
import DisplayText from '../components/DisplayText';
import APIService from '../components/APIService'
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


function LangDetect() {
  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')
  const [spinner, setSpinner] = useState(false);

  const insertText = () =>{
    setSpinner(true);
    APIService.InsertText({body})
    .then((response) => setShowText(response))
    .then((response) => setSpinner(false))
    .catch(error => console.log('error',error))
  }

  //insere o texto, limpa o form e atualiza a pagina
  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertText()
    //setBody('')
    console.log("this is from handleSubmit", ResFromServer)
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
        <h3>Language Detection</h3>
        <p>The language detection service will return the code of the language of the inserted text. </p>
        <p>This service is multilingual and supports 55 languages.</p>
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
        {showText.length > 0 ? (<span><label className="form-label">Results:</label><textarea className="form-control" value={showText/*.map((text) => <li>{text}</li>)*/} rows='6'></textarea></span>) : null
        }
        </div>
      </div>
    </div>
    </>
  );
  
  
}

export default LangDetect