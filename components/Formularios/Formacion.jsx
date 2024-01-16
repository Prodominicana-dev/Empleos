import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React from 'react'
import FlatpickrDatePicker from '../Formularios/flatpickr/Flatpickr'
import PerfilPrueba from '../../components/Formularios/Select/SelectComp';
import  {Cetificate} from '../DataLIstas/DataFormacion';
const Training = ({Training,setTraining,eliminarTraining,elimiTraining,index,Col,error3,setError3}) => {


        const onFechaTrainingChange = (value, name, index) => {
                const date = value instanceof Date ? value.toISOString() : value;
                setTraining((prevTraining) => {
                  const nuevosTraining = [...prevTraining];
                  nuevosTraining[index][name] = date;
                  return nuevosTraining;
                });
              
                setError3({
                        ...error3[index],
                        [`${name}`]: null,
                      });
        };

//.......................................
        const onFormTrainingChange = (e, name,index) => {

                let value = (e.target && e.target.value) || e || '';
                
                
                  setTraining((prevTraining) => {
                    const nuevosTraining= [...prevTraining];
                    nuevosTraining[index][name] = value;
                    return nuevosTraining;
                  });

                  setError3({
                        ...error3[index],
                        [`${name}`]: null,
                      });

                };
//.......................................
const handleSeleccion = (e, name, index) => {
        
        if (e === 'En Proceso') {
            Training.endDate = 'null';
              
        }
        if (e === 'Completado') {
                Training.endDate = '';
                  
            }
      };

//....................................
        const nivel =[
                {label:'Ninguna',value:'1'},
                {label:'Básico',value:'2'},
                {label:'Intermedio',value:'3'},
                {label:'Avanzado',value:'4'}
        ]
        const nivelCertificate =[
                {label:'Completado',value:'Completado'},
                {label:'En Proceso',value:'En Proceso'}
        ]
//..........................................

const todasLasOpciones = Cetificate.flatMap(category => [
        { label: category.label, value: category.label, isDisabled: true }, // Agregar isDisabled a las categorías
        ...category.options
      ]);
    
      
//..........................................
  return (
    <div className=''>
        
         <div className='row'>


                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Formación complementaria:</Form.Label>
                                <PerfilPrueba error={error3[index]?.certificate}  name="certificate" value={Training.certificate} onInputChangeS={(e) => {onFormTrainingChange(e.value, 'certificate', index)}}  option={todasLasOpciones}/> 
                                
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Nivel de la formación:</Form.Label>
                                 <PerfilPrueba error={error3[index]?.level}  name="level" value={Training.level} onInputChangeS={(e) => {onFormTrainingChange(e.value, 'level', index)}} option={nivel}/> 

                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Estado de la certificación:</Form.Label>
                                <PerfilPrueba error={error3[index]?.certificateStatus}  name="certificateStatus" value={Training.certificateStatus} onInputChangeS={(e) => {handleSeleccion(e.value, 'certificateStatus', index);onFormTrainingChange(e.value, 'certificateStatus', index)}} option={nivelCertificate}/>

                               
                        </Form.Group>
                        
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Fecha de Inicio:</Form.Label>
                                <FlatpickrDatePicker
                                        required              
                                        selectedDate={Training.startDate || ''}
                                        onDateChange={(date) => onFechaTrainingChange(date,'startDate', index)}
                                        feedbackMessage="Este campo es requerido"
                                />
                              
                        </Form.Group>
                        {Training.certificateStatus==='Completado' && (
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Fecha de término:</Form.Label>

                                <FlatpickrDatePicker
                                        required              
                                        selectedDate={Training.endDate|| ''}
                                        onDateChange={(date) => onFechaTrainingChange(date,'endDate', index)}
                                        feedbackMessage="Este campo es requerido"
                                />
                               
                              
                        </Form.Group>
                        )}
                    
                        <div className="d-flex justify-content-end">
                                <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarTraining(event, index);elimiTraining(event, index)}}></Button>
                            
                        </div>
            <hr/>
        </div>
    </div>
 
  )
}

export default Training