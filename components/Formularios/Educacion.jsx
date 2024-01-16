import React, { useState } from 'react';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { parseISO } from 'date-fns';
import { DataAreaStudy } from '../DataLIstas/DataEducation';
import FlatpickrDatePicker from '../Formularios/flatpickr/Flatpickr'
import Select from '../../components/Formularios/Select/SelectComp';

const Education = ({Education,setEducation,onFormEducationChange,eliminarEducation,elimiEducation,index,Col,error2,setError2}) => {

        

        const onFechaEducationChange = (value, name, index) => {
                const date = value instanceof Date ? value.toISOString() : value;
                setEducation((prevEducation) => {
                  const nuevosEducation = [...prevEducation];
                  nuevosEducation[index][name] = date;
                  return nuevosEducation;
                });
              
                setError2({
                        ...error2[index],
                        [`${name}`]: null,
                      });
                
        };
    //..........................................
    const handleSeleccion = (e) => {
        
        if (e === 'En Proceso') {
             Education.endStudy = 'null'
            }
        if (e === 'Completado') {
             Education.endStudy = ''
        }
   };
    
   //............................................
        const status =[
                {label:'Completado',value:'Completado'},
                {label:'En Proceso',value:'En Proceso'}
              ]

        const education = [
                {label:'Estudiante',value:'1'},
                {label:'Técnico',value:'2'},
                {label:'Licenciatura',value:'3'},
                {label:'Postgrado',value:'4'},
                {label:'Maestrías',value:'5'},
              ]

              

//..........................................
const todasLasOpciones = DataAreaStudy.flatMap(category => [
        { label: category.label, value: category.label, isDisabled: true }, // Agregar isDisabled a las categorías
        ...category.options
      ]);
    
      
//..........................................
  return (
    <div className=''>
    
    <div className='row'>


    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Preparación académica:</Form.Label>

            <Select error={error2[index]?.academicPreparation}  name="academicPreparation" value={Education.academicPreparation} onInputChangeS={(e) => {onFormEducationChange(e.value, 'academicPreparation', index)}} option={education}/>
           
            
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Institución:</Form.Label>
            <Form.Control 
             required
            type="text"  
            name="institution" 
            value={Education.institution || ''} 
            onChange={(e) => onFormEducationChange(e, 'institution',index)}  style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
   

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Área de Estudio:</Form.Label>
            <Select error={error2[index]?.fieldStudy}  name="fieldStudy" value={Education.fieldStudy} onInputChangeS={(e) => {handleSeleccion(e.value);onFormEducationChange(e.value, 'fieldStudy', index)}} option={todasLasOpciones} />
           
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Título otorgado:</Form.Label>
            <Form.Control 
             required
            type="text"  
            name="degreeAwarded" 
            value={Education.degreeAwarded || ''} 
            onChange={(e) => onFormEducationChange(e, 'degreeAwarded',index)}  style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Estado de estudios:</Form.Label>
            <Select error={error2[index]?.studyStatus}  name="studyStatus" value={Education.studyStatus} onInputChangeS={(e) => {handleSeleccion(e.value);onFormEducationChange(e.value, 'studyStatus', index)}} option={status}/>

             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Fecha de expedición:</Form.Label>
            <FlatpickrDatePicker
                                
                selectedDate={Education.issueDate || ''}
                onDateChange={(date) => onFechaEducationChange(date,'issueDate', index)}
                feedbackMessage="Este campo es requerido"
                />
          
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">

    <Form.Label className='control-label required'>Año de inicio de estudios:</Form.Label>
               <FlatpickrDatePicker
                required              
                selectedDate={Education.startStudy || ''}
                onDateChange={(date) => onFechaEducationChange(date,'startStudy', index)}
                feedbackMessage="Este campo es requerido"
                />
            
    </Form.Group>

    {Education.studyStatus==='Completado' && (

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
        <Form.Label className='control-label required'>Año de término de estudios:</Form.Label>

        <FlatpickrDatePicker
                required              
                selectedDate={Education.endStudy || ''}
                onDateChange={(date) => onFechaEducationChange(date,'endStudy', index)}
                feedbackMessage="Este campo es requerido"
                />
        
        <Form.Control.Feedback type="invalid">
                Este campo es requerido.
        </Form.Control.Feedback>
    </Form.Group>
)}



    <div className="d-flex justify-content-end">
           <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarEducation(event, index);elimiEducation(event, index)}}></Button>
    </div>
   <hr/>
    </div>
    </div>
  )
}

export default Education