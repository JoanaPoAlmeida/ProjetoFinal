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
        <p>The langdetect library is a re-implementation of Google's language-detection library from Java to Python. It suports 55 languages:</p>
        <p className='languages'>af, ar, bg, bn, ca, cs, cy, da, de, el, en, es, et, fa, fi, fr, gu, he,
hi, hr, hu, id, it, ja, kn, ko, lt, lv, mk, ml, mr, ne, nl, no, pa, pl,
pt, ro, ru, sk, sl, so, sq, sv, sw, ta, te, th, tl, tr, uk, ur, vi, zh-cn, zh-tw</p>
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
        </div>
      </div>
    </div>
    </>
  );
  
  
}

export default LangDetect