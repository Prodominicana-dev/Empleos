import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Documentos = ({setFiles}) => {
  return (



<div className=''> 
    <Form.Group className="mb-3" controlId="formFile">
    <Form.Label> Selecciona un archivo</Form.Label>
    <Form.Control type="file" multiple  name='archivo' onChange={(e)=>{setFiles(e.target.files)}}/>
    </Form.Group>
 </div>



  )
}

export default Documentos;