
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Select from '../../Formularios/Select/SelectComp';
import React, { useEffect } from 'react';

const LanguageAssesment = ({Languages,setLanguageAnswer,index,error,setError,idJobOpening,idSubscription}) => {

            //.........................................................

            useEffect(() => {
              const obtenerLanguage = async () => {
                try {
                  setLanguageAnswer((prevLanguage) => {
                    const nuevosLanguage = [...prevLanguage];
                    nuevosLanguage[index] = {
                      idJobOpening: Languages.idJobOpening,
                      idSubscription: idSubscription,
                      language: Languages.language,
                      answerLanguage: '',
                      answerLanguageAssessment:Languages.answerLan,
                      status:'None'
                    };
                    //console.log(nuevosLanguage);
                    return nuevosLanguage;
                  });
                } catch (error) {
                  console.error('Error al obtener Assessment:', error);
                }
              };

              obtenerLanguage();
            }, []);

           //.........................................................

               const onFormLanguageChangeS = (Value, name,index) => {
                const {value} = Value;
                
                 let val = '';
                  
                if(value === undefined){
                    val = Value;
                }else{
                  val = (value) || '';
                }

                setLanguageAnswer((prevLanguage) => {
                  const nuevosLanguage = [...prevLanguage];
                
                  if (!nuevosLanguage[index]) {
                    nuevosLanguage[index] = {
                      idJobOpening: idJobOpening,
                      idSubscription: idSubscription,
                      language: Languages.language,
                      answerLanguage: '',
                      answerLanguageAssessment:Languages.answerLan,
                      status:'None'
                    };
                  }
                
                  nuevosLanguage[index][name] = val;
                  return nuevosLanguage;
                });

              

                setError(prevError => {
                  const updatedError = [...prevError]; 
                  updatedError[index] = {
                    ...updatedError[index], 
                    [`${name}`]: null 
                  };
                  return updatedError;
                });
              
               };
              
     //...................................................................
              
              
     //...................................................................

              const nivel =[
                {label:'Nada',value:'1'},
                {label:'Básico',value:'2'},
                {label:'Intermedio',value:'3'},
                {label:'Avanzado',value:'4'}
              ]

  return (

        
    
        <div className='container'>
            <div className='col-lg-12 row'>
            
            <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">

                    <Form.Label  className='control-label required'>Cuál es tu nivel de <span style={{fontWeight:'bold',color:'blue'}}>{Languages.language}</span> :</Form.Label>
                    {/* {console.log('jajajajajijijiji',error[index]?.answerLan)} */}
                    <Select error={error[index]?.answerLanguage}  name="answerLanguage"  onInputChangeS={(e)=>{onFormLanguageChangeS(e,'answerLanguage',index),onFormLanguageChangeS(Languages.language,'language',index)}} option={nivel} />
                
            </Form.Group>
             
           
            </div>
       </div>
  )}
   export default LanguageAssesment