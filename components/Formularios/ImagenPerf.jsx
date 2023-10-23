import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const ImagenPerf = ({setImagen}) => {

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
      
        if (selectedFile && selectedFile.type.includes('image')) {
          setImagen(selectedFile);
        } else {
          // Si el archivo seleccionado no es una imagen válida, puedes mostrar un mensaje de error o realizar alguna otra acción.
          console.error('Archivo no válido. Selecciona una imagen.');
        }
      };
  return (
    <div className=''> 

        <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Selecciona tu imagen de perfil</Form.Label>
        <Form.Control type="file" name='imagen' onChange={handleImageChange} accept="image/*"/>
        </Form.Group>
        
    </div>
  )
}

export default ImagenPerf