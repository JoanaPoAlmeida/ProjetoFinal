import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import APIService from '../components/APIService'
import Footer from '../components/Footer'
import { FaLaravel } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'

function Sum() {

  
  //set default value to null
  const [ResFromServer, setResFromServer] = useState("");
  const [showText, setShowText] = useState("");
  const [body, setBody] = useState('')

  const insertText = () =>{
    APIService.InsertSummary({body})
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
    setBody(e.target.value)
    setShowText("")
  }

  return (
    <>
    <Container>
      <div className="row p-2">
        <p>The gemsin.summarization is a </p>
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
          <label className="form-label">Results:</label>
          <div className="form-control">
            <p>{showText}</p> 
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Sum