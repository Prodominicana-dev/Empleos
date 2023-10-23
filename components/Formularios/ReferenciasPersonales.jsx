import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

const ReferenciasPersonales = ({referenciasPersonales,onFormReferenciasPersonalesChange,eliminarReferenciasPersonales,elimiReferenciasPersonales,index,Col}) => {
  return (
    <div className=''>

            <div className='row'>


                <Form.Group  as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombres y Apellidos:</Form.Label>
                        <Form.Control  required type="text"  name="NombreCompleto" 
                        value={referenciasPersonales.NombreCompleto || ''} 
                        onChange={(e) => onFormReferenciasPersonalesChange(e, 'NombreCompleto')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfonos:</Form.Label>
                        <Form.Control  required type="text"  name="Telefono" 
                        value={referenciasPersonales.Telefono || ''} 
                        onChange={(e) => onFormReferenciasPersonalesChange(e, 'Telefono')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Ocupación:</Form.Label>
                        <Form.Control  required type="text"  name="Ocupacion" 
                        value={referenciasPersonales.Ocupacion || ''} 
                        onChange={(e) => onFormReferenciasPersonalesChange(e, 'Ocupacion')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                

            
                <div className="d-flex justify-content-end">
                        <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarReferenciasPersonales(event, index);elimiReferenciasPersonales(event, index)}}></Button>
                    {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
                </div>
                <hr/>
            </div>
     </div>
  )
}

export default ReferenciasPersonales