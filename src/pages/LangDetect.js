import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
function LangDetect() {
  //set default value to null
  let [langdetect, setlangdetect] = useState(null);

  //fetch data from flask and set it to langdetect
  //PROBLEMA: ELE NAO TA A ATUALIZAR OS DADOS QUANDO RECECEBE UM NOVO INPUT
  //se atualizar a pagina aparece o codigo do input anterior
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
    .then(messages => console.log(messages))
    .catch(error => console.log(error))
  },[])
  
  console.log(langdetect)

  return (
    <>
      <form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Paste your text here </Form.Label>
        <Form.Control as="textarea" rows={3}  />
        </Form.Group>
        {langdetect}
      </form>
      
    </>
      
    
  );
  
}

export default LangDetect