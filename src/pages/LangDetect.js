import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function LangDetect() {
  return (
    
      <form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Paste your text here </Form.Label>
        <Form.Control as="textarea" rows={3}  />
        </Form.Group>
        
      </form>
    
  );
  
}

export default LangDetect