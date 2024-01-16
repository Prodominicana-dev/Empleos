
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Select from '../../components/Formularios/Select/SelectComp';
import React, { useEffect } from 'react';

const ProfileParticulars = ({ProfileParticulars,index,error,setError,setProfileParticularsAnswer,idJobOpening,idSubscription}) => {

      //.........................................................
                  
      useEffect(() => {
        const obtenerProfileParticular = async () => {
          try {
            setProfileParticularsAnswer((prevProfileParticular) => {
              const nuevosProfileParticular = [...prevProfileParticular];
              nuevosProfileParticular[index] = {
                idJobOpening: ProfileParticulars.idJobOpening,
                idSubscription: idSubscription,
                ask : ProfileParticulars.ask,
                answerProfileParticulars : '',
                answerProfileParticularsAssessment:ProfileParticulars.answerProf,
                status:'None'
              };
              console.log(nuevosProfileParticular);
              return nuevosProfileParticular;
            });
          } catch (error) {
            console.error('Error al obtener ProfileParticular:', error);
          }
        };

        obtenerProfileParticular();
      }, []);


    //...............................................................
               const onFormProfileParticularsChangeS = (Value, name,index) => {

                const {value} = Value;
               
                const val = (value) || '';

                setProfileParticularsAnswer((prevProfileParticular) => {
                  const nuevosProfileParticular = [...prevProfileParticular];
                
                  if (!nuevosProfileParticular[index]) {
                    nuevosProfileParticular[index] = {
                      idJobOpening: idJobOpening,
                      idSubscription: idSubscription,
                      ask : ProfileParticulars.ask,
                      answerProfileParticulars : '',
                      answerProfileParticularsAssessment:ProfileParticulars.answerProf,
                      status:'None'
                    };
                  }
                
                  nuevosProfileParticular[index][name] = val;
                  return nuevosProfileParticular;
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

                console.log('aquiiooo',error)
    //...................................................................

              const nivel =[
                {label:'Si',value:'Si'},
                {label:'No',value:'No'}
              ]

  return (

        
    
        <div className='container'>
            <div className='col-lg-12 row'>
            
            <Form.Group  className="mb-3 col-lg-12 form-control-lg" controlId="formFile">

                    <Form.Label className='control-label required'>{ProfileParticulars.ask }</Form.Label>
                    <Select error={error[index]?.answerProfileParticulars}  name="answerProfileParticulars"  onInputChangeS={(e)=>{onFormProfileParticularsChangeS(e,'answerProfileParticulars',index);}} option={nivel} />
                
            </Form.Group>
               
            
            </div>
        </div>

  )}
   export default ProfileParticulars