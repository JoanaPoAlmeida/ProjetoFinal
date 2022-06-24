import React,{ useState } from 'react';
import APIService from '../components/APIService'


const Form = (props) => {
  const [body, setBody] = useState('')
  
  const insertText = () =>{
    APIService.InsertText({body})
    .then((response) => props.insertedText(response))
    .then((response) => console.log("This is from insertText",response))
    .catch(error => console.log('error',error))
  }

  //insere o texto, limpa o form e atualiza a pagina
  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertText()
    setBody('')
    window.location.reload(false);
  }


  return (
    

        <form onSubmit = {handleSubmit}>

          <label htmlFor="body" className="form-label">Insert your text here</label>
          <textarea 
          className="form-control" 
          placeholder ="Enter body" 
          rows='6'
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
          >
          </textarea>

          <button 
          className="btn btn-primary mt-2"
          >
          Send</button>
          
        </form>
              

    
  )}

export default Form;