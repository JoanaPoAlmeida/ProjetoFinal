import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import APIService from '../components/APIService'
import '../App.css'
import { render } from '@testing-library/react'
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
function Keywords() {

  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')
  const [spinner, setSpinner] = useState(false);

  const insertText = () =>{
    setSpinner(true);
    APIService.InsertKeywords({body})
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
  }
  const TextArea = (e) => {
    setBody(e.target.value)
    setShowText("")
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.showText.value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }



  return (
    <>
    <div className="container">
      <div className="row p-2">
        <h3><b>Keywords</b></h3>
        <p>This service will detect that keywords in the inserted text and return it.</p>
        <p>The Keywords Service is multilingual</p>
        {/*if the service can't find any keywords it will return a message*/}
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
        {showText.length > 0 ? (<span><label className="form-label">Results:</label><div className="form-control"><p>{showText}</p> </div></span>) : null
        }

        <button onClick={downloadTxtFile}>Download txt</button>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Keywords