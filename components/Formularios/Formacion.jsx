import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import React from 'react'

const Formacion = ({dicusece,onFechaDicuseceChange,onFormDicuseceChange,eliminarDicusece,elimiFormacion,index,Col}) => {
  return (
    <div className=''>
        
         <div className='row'>


                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Formación complementaria:</Form.Label>
                                <Form.Control required type="text"  name="Certificado" 
                                value={dicusece.Certificado || ''} 
                                onChange={(e) => onFormDicuseceChange(e, 'Certificado')} data-index={index} style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                        Este campo es requerido.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Estado de la certificación:</Form.Label>
                                <Form.Control required type="text"  name="EstadoCerti" 
                                value={dicusece.EstadoCerti || ''} 
                                onChange={(e) => onFormDicuseceChange(e, 'EstadoCerti')} data-index={index} style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es requerido.
                                </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Fecha de Inicio:</Form.Label>
                                <DatePicker
                                required
                                id={`FechaInicio-${index}`}
                                selected={typeof dicusece.FechaInicio === 'string' && dicusece.FechaInicio.trim() !== ''  ? parseISO(dicusece.FechaInicio):dicusece.FechaInicio}
                                onChange={(date)=>{onFechaDicuseceChange(date,'FechaInicio', index)}}
                                className='form-control custom-datepicker'
                                dateFormat='dd/MM/yyyy'
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es requerido.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Fecha de término:</Form.Label>
                                <DatePicker
                                required
                                id={`FechaFinal-${index}`}
                                selected={typeof dicusece.FechaFinal === 'string' && dicusece.FechaFinal.trim() !== ''? parseISO(dicusece.FechaFinal):dicusece.FechaFinal}
                                onChange={(date)=>{onFechaDicuseceChange(date,'FechaFinal', index)}}
                                className='form-control custom-datepicker'
                                dateFormat='dd/MM/yyyy'
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es requerido.
                                </Form.Control.Feedback>
                        </Form.Group>

                    
                        <div className="d-flex justify-content-end">
                                <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarDicusece(event, index);elimiFormacion(event, index)}}></Button>
                            {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
                        </div>
            <hr/>
        </div>
    </div>
 
  )
}

export default Formacion