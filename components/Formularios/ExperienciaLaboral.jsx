import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { parseISO } from 'date-fns';
import React from 'react'

import { dataIndustria,DataAreaPuesto } from '../DataLIstas/DataWorkExperience';

import FlatpickrDatePicker from '../Formularios/flatpickr/Flatpickr'
import PhoneField from '../../components/PhoneField/PhoneField';
import Select from '../../components/Formularios/Select/SelectComp';

const WorkExperience = ({WorkExperience,setWorkExperiences,onFormChange,eliminarWorkExperience,eliminarExperiencia,error,index,Col}) => {
   
    const onFechaChange = (value, name, index) => {
        const date = value instanceof Date ? value.toISOString() : value;
        setWorkExperiences((prevWorkExperience) => {
          const nuevosWorkExperience = [...prevWorkExperience];
          nuevosWorkExperience[index][name] = date;
          return nuevosWorkExperience;
        });
      
        
     };

     const onPhoneWorkExperiencesChange = (e, name, index) => {

        setWorkExperiences((prevWorkExperiences) => {
          const nuevosWorkExperiences = [...prevWorkExperiences];
          nuevosWorkExperiences[index][name] = e.toString();
          return nuevosWorkExperiences;
        });
      };

  

  return (
    <>
    <div className='container'>
         
       
         <div className='row'>
                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Fecha inicial:</Form.Label>

                            <FlatpickrDatePicker
                                selectedDate={WorkExperience.startDate || ''}
                                onDateChange={(date)=>{onFechaChange(date,'startDate',index)}}
                                feedbackMessage="Este campo es requerido"
                            />
                            
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Fecha final:</Form.Label>
                            
                            <FlatpickrDatePicker
                                selectedDate={WorkExperience.endDate || ''}
                                onDateChange={(date)=>{onFechaChange(date,'endDate',index)}}
                                feedbackMessage="Este campo es requerido"
                            />
                        
                            
                    </Form.Group>


                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Nombre de la compañía:</Form.Label>
                            <Form.Control 
                            required
                            type="text" 
                            name="companyName" 
                            value={WorkExperience.companyName  || ''} 
                            onChange={(e) => onFormChange(e, 'companyName',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Puesto:</Form.Label>
                            <Form.Control 
                            required
                            type="text"  
                            name="position" 
                            value={WorkExperience.position || ''} 
                            onChange={(e) => onFormChange(e, 'position',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Salario:</Form.Label>
                            <Form.Control 
                            required
                            type="text"  
                            name="salary" 
                            value={WorkExperience.salary || ''} 
                            onChange={(e) => onFormChange(e, 'salary',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Área del puesto:</Form.Label>
                            <Select error={error[index]?.jobArea}  name="jobArea" value={WorkExperience.jobArea} onInputChangeS={(e) => {onFormChange(e.value, 'jobArea', index)}} option={DataAreaPuesto}/>
                            {/* <Form.Control 
                                required
                            type="text"  
                            name="jobArea" 
                            value={WorkExperience.jobArea || ''} 
                            onChange={(e) => onFormChange(e, 'jobArea',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Industria:</Form.Label>
                            <Select error={error[index]?.industry}  name="industry" value={WorkExperience.industry} onInputChangeS={(e) => {onFormChange(e.value, 'industry', index)}} option={dataIndustria}/>
                            {/* <Form.Control 
                                required
                            type="text"  
                            name="industry" 
                            value={WorkExperience.industry || ''} 
                            onChange={(e) => onFormChange(e, 'industry',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Supervisor:</Form.Label>
                            
                            <Form.Control 
                                required
                            type="text"  
                            name="supervisor" 
                            value={WorkExperience.supervisor || ''} 
                            onChange={(e) => onFormChange(e, 'supervisor',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Funciones y logros:</Form.Label>
                            <Form.Control 
                                required
                            type="text"  
                            name="responsibilitiesAchievements" 
                            value={WorkExperience.responsibilitiesAchievements || ''} 
                            onChange={(e) => onFormChange(e, 'responsibilitiesAchievements',index)}  style={{ height: '40px' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                            <Form.Label className='control-label required'>Teléfono:</Form.Label>
                            
                            <PhoneField
                                value={WorkExperience.phoneNumber || ''}
                                onChange={(e) => onPhoneWorkExperiencesChange(e, 'phoneNumber',index)}
                            />
                           
                            <Form.Control.Feedback type="invalid">
                                Este campo es requerido.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end col">
                    <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarWorkExperience(event,index);eliminarExperiencia(event,index)}}></Button>
                    </div>
                    <hr/>
         </div>
                    
                
                                        
                                       
    </div>
    </>
  )
}

export default WorkExperience