import {Url} from '../../components/Url/URL';
import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Select from '../../components/Formularios/Select/SelectComp';
import  Axios from 'axios';
const PerfilAssessment=({id,Assessment,setAssessment, error,setError})=>{





    

    useEffect(() => {
        const obtenerArchivos = async () => {
          try {
            const response = await Axios.get(`${Url}ProfileAssessment/${id}`);
           // console.log(response.data)
            const data = response.data[0]
            
            
           
           // console.log('Heyyy',Assessment)

            setAssessment((assessment)=>{
              assessment.sexAssessment = data.sex;
              assessment.edadAssessment = data.edad;
              assessment.workExperienceAssessment = data.workExperience;
              assessment.educationAssessment = data.education;
              return assessment
            });
          } catch (error) {
            console.error('Error al obtener Assessment:', error);
          }
        };
    
        obtenerArchivos();
      }, []);
//....................................................
 
 const onInputChange = (e, name,) => {
              
    let val = (e.target && e.target.value) || '';
    let _Assessment = { ...Assessment };
    _Assessment[`${name}`] =  val.toString();
    setAssessment(_Assessment);

    setError({
        ...error,
        [`${name}`]: null,
      });


};
//....................................................
      const onInputChangeS = (Value,name) => {
        const {value}=Value;
        const val = (value) || '';

       
        //console.log(val +" "+name)
        
        let _Assessment = { ...Assessment };
        _Assessment[`${name}`] =  val.toString();
        setAssessment(_Assessment);

       
        setError({
                ...error,
                [`${name}`]: null,
              });
        
       };

  //.............................................
  const Sex = [
    {label:'Masculino',value:'Masculino'},
    {label:'Femenino',value:'Femenino'},
]
const WorkExperience = [
    {label:'Ninguna',value:'1'},
    {label:'1-2 Años',value:'2'},
    {label:'3-5 Años',value:'3'},
    {label:'Más de 5 años',value:'4'},
]

const Education = [
    {label:'Estudiante',value:'1'},
    {label:'Técnico',value:'2'},
    {label:'Licenciatura',value:'3'},
    {label:'Postgrado',value:'4'},
    {label:'Maestrías',value:'5'},
]

    return(
        

    <div className='card'>
        <div className='container'>
        <div className='col-lg-12'>
        <div className='row'>
            
            <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Edad:</Form.Label>
                        <Form.Control  required type="text" name="edad" 
                        value= {Assessment.edad || ''}
                        onChange={(e)=>{onInputChange(e, 'edad')}} style={{ height: '40px' }}/>
                         <Form.Control.Feedback type="valiud">
                    {error.edad && 
                        (
                            <div >
                              <span
                                style={{
                                  color: 'red',
                                  fontSize: '12px',
                                  display: 'flex',
                                  alignItems: 'left',
                                  justifyContent: 'left',
                                  width: 'auto',
                                  height: '22px',
                                }}
                              >
                                Este campo es requerido
                              </span>
                            </div>
                          )}
                    </Form.Control.Feedback>
            </Form.Group>




                <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Sexo:</Form.Label>

                        <Select error={error.sex}  name="sex" value={Assessment.sex} onInputChangeS={(e)=>{onInputChangeS(e,'sex')}} option={Sex}/>
                    
                </Form.Group>
                <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Experiencia en el área:</Form.Label>

                        <Select error={error.workExperience}  name="workExperience" value={Assessment.workExperience} onInputChangeS={(e)=>{onInputChangeS(e,'workExperience')}} option={WorkExperience}/>
                     
                </Form.Group>

                <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Especificar grado instrucción:</Form.Label>

                        <Select error={error.education}  name="education" value={Assessment.education} onInputChangeS={(e)=>{onInputChangeS(e,'education')}} option={Education}/>
                      
                </Form.Group>
                
                </div>

                </div>
                </div>

        </div>
    )
}

export default PerfilAssessment