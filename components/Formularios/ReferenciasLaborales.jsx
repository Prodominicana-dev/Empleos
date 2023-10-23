import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
//import DatePicker from 'react-datepicker';

const ReferenciasLaborales = ({referenciasLaborales,onFormReferenciasLaboralesChange,eliminarReferenciasLaborales,elimiReferenciasLaborales,index,Col}) => {
  return (
    <div className=''>

            <div className='row'>


                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombres y Apellidos:</Form.Label>
                        <Form.Control required type="text"  name="NombreCompleto" 
                        value={referenciasLaborales.NombreCompleto || ''} 
                        onChange={(e) => onFormReferenciasLaboralesChange(e, 'NombreCompleto')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfonos:</Form.Label>
                        <Form.Control required type="text"  name="Telefono" 
                        value={referenciasLaborales.Telefono || ''} 
                        onChange={(e) => onFormReferenciasLaboralesChange(e, 'Telefono')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Profesión:</Form.Label>
                        <Form.Control required type="text"  name="Profesion" 
                        value={referenciasLaborales.Profesion || ''} 
                        onChange={(e) => onFormReferenciasLaboralesChange(e, 'Profesion')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Relación:</Form.Label>
                        <Form.Control required type="text"  name="Relacion" 
                        value={referenciasLaborales.Relacion || ''} 
                        onChange={(e) => onFormReferenciasLaboralesChange(e, 'Relacion')} data-index={index} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>

            
                <div className="d-flex justify-content-end">
                        <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarReferenciasLaborales(event, index);elimiReferenciasLaborales(event, index)}}></Button>
                    {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
                </div>
                <hr/>
            </div>
     </div>
  )
}

export default ReferenciasLaborales