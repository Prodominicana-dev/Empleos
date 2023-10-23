import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
//import DatePicker from 'react-datepicker';
import { idiomaJson } from './idiomas';
import Select from '../Select/SelectComp';

const Idiomas = ({idiomas,index,Col,error,setError,setIdioma,elimiIdioma,eliminarIdioma}) => {

               const onFormIdiomaChangeS = (Value, name,index) => {
                const {value}=Value;
               
                const val = (value) || '';
              
               
                setIdioma((prevIdioma) => {
                  const nuevosIdioma = [...prevIdioma];
                  nuevosIdioma[index][name] = val;
                  return nuevosIdioma;
                });
               
                setError({
                        ...error[index],
                        [`${name}`]: null,
                      });
              
              };

              const onFormIdiomaChange = (e, name,) => {
                const val = e.target.value;
                const index = e.target.dataset.index;
              
                setIdioma((prevIdioma) => {
                  const nuevosIdioma = [...prevIdioma];
                  nuevosIdioma[index][name] = val;
                  return nuevosIdioma;
                });
              };

             
    //...................................................................

              const idioma = idiomaJson.map((item) => ({
                label: item.nombre,
                value: item.nombre
              }));
              const nivel =[
                {label:'Alto',value:'Alto'},
                {label:'Bajo',value:'Bajo'},
                {label:'Medio',value:'Medio'}
              ]

  return (

        
    <div className=''>
    <div className='col-lg-12 row'>
    
   
    <Form.Group as={Col} className="mb-3 col-lg-4" controlId="formFile">
            <Form.Label className='control-label required'>Idioma:</Form.Label>

            <Select error={error[index]?.Idioma}  name="Idioma" value={idiomas.Idioma} onInputChangeS={(e)=>{onFormIdiomaChangeS(e,'Idioma',index);}} option={idioma} />
                       
            {/* <Form.Select 
            required
            name="idiomas" 
            //aria-label="Default select" 
            onChange={(e)=>{onFormIdiomaChange(e,"Idioma")}}
            //value={idiomas.idiomas || ''} 
            data-index={index}
            >
           
            <option>Sin selección</option>

            {idiomaJson.map(idioma => (
            <option key={idioma.id} value={idioma.nombre}>{idioma.nombre}</option>
             ))}
           
            </Form.Select> */}
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nombre de la Institución:</Form.Label>
            <Form.Control 
            required
            type="text"   
            name='NombreInstitucion' 
            onChange={(e)=>{onFormIdiomaChange(e,"NombreInstitucion")}}
            value={idiomas.NombreInstitucion || ''} 
            data-index={index}
            style={{ height: '40px' }}
            />
            <Form.Control.Feedback type="invalid">
                    Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de conversación:</Form.Label>
            <Select error={error[index]?.NivelConversacion}  name="NivelConversacion" value={idiomas.NivelConversacion} onInputChangeS={(e)=>{onFormIdiomaChangeS(e,'NivelConversacion',index);}} option={nivel} />
            {/* <Form.Select 
            required
            name="NivelConversacion" 
            //aria-label="Default select example" 
            onChange={(e)=>{onFormIdiomaChange(e,"NivelConversacion")}}
            value={idiomas.NivelConversacion || ''} 
            data-index={index}
            >
            <option>Selecciona</option>
            <option value="Alto">Alto</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            </Form.Select> */}
    </Form.Group>
    
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de lectura:</Form.Label>
            <Select error={error[index]?.NivelLectura}  name="NivelLectura" value={idiomas.NivelLectura} onInputChangeS={(e)=>{onFormIdiomaChangeS(e,'NivelLectura',index);}} option={nivel} />
            {/* <Form.Select 
            required
            name="NivelLectura" 
            //aria-label="Default select example" 
            onChange={(e)=>{onFormIdiomaChange(e,"NivelLectura")}}
            value={idiomas.NivelLectura || ''} 
            data-index={index}
            >
            <option>Selecciona</option>
            <option value="Alto">Alto</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                    Este campo es requerido.
            </Form.Control.Feedback> */}
    </Form.Group>
  
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Nivel de escritura:</Form.Label>
            <Select error={error[index]?.NivelEscritura}  name="NivelEscritura" value={idiomas.NivelEscritura} onInputChangeS={(e)=>{onFormIdiomaChangeS(e,'NivelEscritura',index);}} option={nivel} />
            {/* <Form.Select 
            required
            name="NivelEscritura" 
            //aria-label="Default select example" 
            onChange={(e)=>{onFormIdiomaChange(e,"NivelEscritura")}}
            value={idiomas.NivelEscritura || ''} 
            data-index={index}
            >
            <option>Selecciona</option>
            <option value="Alto">Alto</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                    Este campo es requerido.
            </Form.Control.Feedback> */}
    </Form.Group>
  
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Capacidad de traducir:</Form.Label>
            <Select error={error[index]?.CapacidadTraducir}  name="CapacidadTraducir" value={idiomas.CapacidadTraducir} onInputChangeS={(e)=>{onFormIdiomaChangeS(e,'CapacidadTraducir',index);}} option={nivel} />
            {/* <Form.Select 
            required
            name="CapacidadTraducir" 
            //aria-label="Default select example" 
            onChange={(e)=>{onFormIdiomaChange(e,"CapacidadTraducir")}}
            value={idiomas.CapacidadTraducir || ''} 
            data-index={index}
            >
            <option>Selecciona</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
           
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                    Este campo es requerido.
            </Form.Control.Feedback> */}
    </Form.Group>

    <div className="d-flex justify-content-end">
           <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarIdioma(event, index);elimiIdioma(event, index)}}></Button>
        {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
    </div>
    <hr/>
    </div>
    </div>
  )
}

export default Idiomas