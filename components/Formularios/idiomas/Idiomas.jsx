import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
//import DatePicker from 'react-datepicker';
import { LanguageJson } from './idiomas';
import Select from '../Select/SelectComp';

const Language = ({Languages,index,Col,error,setError,setLanguage,elimiLanguage,eliminarLanguage}) => {

               const onFormLanguageChangeS = (Value, name,index) => {
                const {value}=Value;
               
                const val = (value) || '';
              
               
                setLanguage((prevLanguage) => {
                  const nuevosLanguage = [...prevLanguage];
                  nuevosLanguage[index][name] = val;
                  return nuevosLanguage;
                });
               
                setError({
                        ...error[index],
                        [`${name}`]: null,
                      });
              
              };

              const onFormLanguageChange = (e, name,) => {
                const val = e.target.value;
                const index = e.target.dataset.index;
              
                setLanguage((prevLanguage) => {
                  const nuevosLanguage = [...prevLanguage];
                  nuevosLanguage[index][name] = val;
                  return nuevosLanguage;
                });
              };

             
    //...................................................................
  
              const Language = LanguageJson.map((item) => ({
                label: item.name,
                value: item.name
              }));

              const nivel =[
                {label:'Nada',value:'Nada'},
                {label:'Bajo',value:'Bajo'},
                {label:'Medio',value:'Medio'},
                {label:'Alto',value:'Alto'}
              ]

              const Level =[
                {label:'Nada',value:'1'},
                {label:'Básico',value:'2'},
                {label:'Intermedio',value:'3'},
                {label:'Avanzado',value:'4'}
              ]
  return (

        
    <div className=''>
    <div className='col-lg-12 row'>
    
   
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4" controlId="formFile">
            <Form.Label className='control-label required'>Idiomas:</Form.Label>

            <Select error={error[index]?.language}  name="language" value={Languages.language} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'language',index);}} option={Language} />
                       
           
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nombre de la Institución:</Form.Label>
            <Form.Control 
            required
            type="text"   
            name='institutionName' 
            onChange={(e)=>{onFormLanguageChange(e,"institutionName")}}
            value={Languages.institutionName || ''} 
            data-index={index}
            style={{ height: '40px' }}
            />
            <Form.Control.Feedback type="invalid">
                    Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de conversación:</Form.Label>
            <Select error={error[index]?.conversationLevel}  name="conversationLevel" value={Languages.conversationLevel} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'conversationLevel',index);}} option={nivel} />
            
    </Form.Group>
    
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de lectura:</Form.Label>
            <Select error={error[index]?.readingLevel}  name="readingLevel" value={Languages.readingLevel} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'readingLevel',index);}} option={nivel} />
            
    </Form.Group>
  
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de escritura:</Form.Label>
            <Select error={error[index]?.writingLevel}  name="writingLevel" value={Languages.writingLevel} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'writingLevel',index);}} option={nivel} />
            
    </Form.Group>
  
    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Capacidad de traducir:</Form.Label>
            <Select error={error[index]?.translationAbility}  name="translationAbility" value={Languages.translationAbility} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'translationAbility',index);}} option={nivel} />
           
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de tu capacidad:</Form.Label>
            <Select error={error[index]?.level}  name="level" value={Languages.level} onInputChangeS={(e)=>{onFormLanguageChangeS(e,'level',index);}} option={Level} />
           
    </Form.Group>

    <div className="d-flex justify-content-end">
           <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarLanguage(event, index);elimiLanguage(event, index)}}></Button>
        {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
    </div>
    <hr/>
    </div>
    </div>
  )
}

export default Language