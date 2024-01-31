
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Select from '../../components/Formularios/Select/SelectComp';
import React, { useEffect } from 'react';

const KnowledgeAssessment = ({Knowledges,index,error,setError,setKnowledgeAnswer,idJobOpening,idSubscription}) => {


      //.........................................................
            
      useEffect(() => {
        const obtenerKnowledge = async () => {
          try {
            setKnowledgeAnswer((prevKnowledge) => {
              const nuevosKnowledge = [...prevKnowledge];
              nuevosKnowledge[index] = {
                idJobOpening: Knowledges.idJobOpening,
                idSubscription: idSubscription,
                knowledge: Knowledges.knowledges,
                answerKnowledge:'',
                answerKnowledgeAssessment:Knowledges.answerKnow,
                status:'None'
              };
              //console.log(nuevosKnowledge);
              return nuevosKnowledge;
            });
          } catch (error) {
            console.error('Error al obtener Knowledge:', error);
          }
        };

        obtenerKnowledge();
      }, []);

     
    //..........................................................

               const onFormKnowledgeChangeS = (Value, name,index) => {
                const {value} = Value;
               
                const val = (value) || '';
              
               
                
                setKnowledgeAnswer((prevKnowledge) => {
                  const nuevosKnowledge = [...prevKnowledge];
                
                  if (!nuevosKnowledge[index]) {
                    nuevosKnowledge[index] = {
                      idJobOpening: idJobOpening,
                      idSubscription: idSubscription,
                      knowledge: Knowledges.knowledge,
                      answerKnowledge:'',
                      answerKnowledgeAssessment:Knowledges.answerKnow,
                      status:'None'
                    };
                  }
                
                  nuevosKnowledge[index][name] = val;
                  return nuevosKnowledge;
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

                    <Form.Label className='control-label required'>Indica tu nivel de conocimiento en <span style={{fontWeight:'bold',color:'blue'}}>{Knowledges.knowledge}</span> </Form.Label>
                    <Select error={error[index]?.answerKnowledge}  name="answerKnowledge"  onInputChangeS={(e)=>{onFormKnowledgeChangeS(e,'answerKnowledge',index);}} option={nivel} />
                
            </Form.Group>
               
           
           
       </div>
    </div>
  )}
   export default KnowledgeAssessment