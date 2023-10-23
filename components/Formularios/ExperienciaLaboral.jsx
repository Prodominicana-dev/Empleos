import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { parseISO } from 'date-fns';
import React from 'react'

const ExperienciaLaboral = ({formulario,onFechaChange,onFormChange,eliminarFormulario,eliminarExperiencia,index,Col}) => {
// // @refresh reset
//     const fechaPorDefecto = new Date(1/1/2001);

  return (
    <>
    <div className=''>
         
       
         <div className='row'>
                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Fecha inicial:</Form.Label>
                            <DatePicker
                                required
                                id={`FechaInicial-${index}`}
                                selected={typeof formulario.FechaInicial === 'string' && formulario.FechaInicial.trim() !== '' 
                                ? parseISO(formulario.FechaInicial)
                                : formulario.FechaInicial}
                                onChange={(date)=>{onFechaChange(date,'FechaInicial',index)}}
                                className='form-control custom-datepicker'
                                dateFormat='dd/MM/yyyy'
                                style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Fecha final:</Form.Label>
                            <DatePicker
                                required
                                id={`FechaFinal-${index}`}
                                selected={typeof formulario.FechaFinal==='string' && formulario.FechaFinal.trim() !== ''
                                ?parseISO(formulario.FechaFinal):formulario.FechaFinal}
                                onChange={(date)=>{onFechaChange(date,'FechaFinal',index)}}
                                className='form-control custom-datepicker'
                                dateFormat='dd/MM/yyyy'
                                style={{ height: '40px' }}
                            />
                                <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Nombre de la compañía:</Form.Label>
                            <Form.Control 
                            required
                            type="text" 
                            name="NombreCompania" 
                            value={formulario.NombreCompania || ''} 
                            onChange={(e) => onFormChange(e, 'NombreCompania')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Puesto:</Form.Label>
                            <Form.Control 
                            required
                            type="text"  
                            name="Puesto" 
                            value={formulario.Puesto || ''} 
                            onChange={(e) => onFormChange(e, 'Puesto')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Salario:</Form.Label>
                            <Form.Control 
                            required
                            type="text"  
                            name="Salario" 
                            value={formulario.Salario || ''} 
                            onChange={(e) => onFormChange(e, 'Salario')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Área del puesto:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="AreaPuesto" 
                            value={formulario.AreaPuesto || ''} 
                            onChange={(e) => onFormChange(e, 'AreaPuesto')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Industria:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="Industria" 
                            value={formulario.Industria || ''} 
                            onChange={(e) => onFormChange(e, 'Industria')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Supervisor:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="Supervisor" 
                            value={formulario.Supervisor || ''} 
                            onChange={(e) => onFormChange(e, 'Supervisor')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Funciones y logros:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="FuncionesLogros" 
                            value={formulario.FuncionesLogros || ''} 
                            onChange={(e) => onFormChange(e, 'FuncionesLogros')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Teléfono:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="Telefono" 
                            value={formulario.Telefono || ''} 
                            onChange={(e) => onFormChange(e, 'Telefono')} data-index={index} style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end col">
                    <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarFormulario(event,index);eliminarExperiencia(event,index)}}></Button>
                    </div>
                    <hr/>
         </div>
                    
                
                                        
                                       
    </div>
    </>
  )
}

export default ExperienciaLaboral