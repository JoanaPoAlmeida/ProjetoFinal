import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import APIService from '../components/APIService'
import '../App.css'
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
function Sentilex() {

  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')
  const [spinner, setSpinner] = useState(false);

  const insertText = () =>{
    setSpinner(true);
    APIService.InsertSentilex({body})
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


  return (
    <>
    <div className="container">
      <div className="row p-2">
        <h3>Sentiment Analysis</h3>
        <p>Here you can analise a sentence of your choice </p>
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
        {showText.length > 0 ? (<span><label className="form-label">Results:</label><textarea className="form-control" value={showText/*.map((text) => <li>{text}</li>)*/} rows='6'></textarea></span>) : null
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Sentilex