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

{/* <div className='mt-4 mb-3'>
        <label htmlFor="file-upload" className="custom-file-upload">
          <i className="pi pi-plus-circle" ></i> Selecciona una imagen
        </label>
        <input id="file-upload" type="file" multiple name='imagen' onChange={handleImageChange}  accept="image/*"/>
      </div>

      <style>
        {`
          .custom-file-upload {
            border: 2px solid blue;
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 20px;
            background-color: white;
            color: blue;
          }

          .custom-file-upload:hover {
            background-color: blue;
            color: white;
          }

          input[type='file'] {
            display: none;
            -webkit-appearance: none;
            appearance: none;
          }
        `}
      </style> */}




        <Form.Group className="mt-5 mb-3" controlId="formFile">
        <Form.Control type="file" name='imagen' onChange={handleImageChange} accept="image/*"/>
        </Form.Group>
        
    </div>
  )
}

export default ImagenPerf