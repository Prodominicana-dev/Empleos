import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';

const Educacion = ({educacion,onFechaEducacionChange,onFormEducacionChange,eliminarEducacion,elimiEducacion,index,Col}) => {

   




  return (
    <div className=''>
    
    <div className='row'>


    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Preparación académica:</Form.Label>
            <Form.Control 
             required
            type="text"  
            name="PreparacionAcademica" 
            value={educacion.PreparacionAcademica || ''} 
            onChange={(e) => onFormEducacionChange(e, 'PreparacionAcademica')} data-index={index} style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
            
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Institución:</Form.Label>
            <Form.Control 
             required
            type="text"  
            name="Institución" 
            value={educacion.Institución || ''} 
            onChange={(e) => onFormEducacionChange(e, 'Institución')} data-index={index} style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    {/* <Form.Group className="mb-3 col-lg-4" controlId="formFile">
            <Form.Label>Área de Estudio:</Form.Label>
            <Form.Control type="text"  name="AreaEstudio" 
            value={educacion.AreaEstudio || ''} 
            onChange={(e) => onFormEducacionChange(e, 'AreaEstudio')} data-index={index}
            />
    </Form.Group> */}

    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Área de Estudio:</Form.Label>
            <Form.Control 
             required
            type="text" 
             name="AreaEstudio" 
            value={educacion.AreaEstudio || ''} 
            onChange={(e) => onFormEducacionChange(e, 'AreaEstudio')} data-index={index} style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Título otorgado:</Form.Label>
            <Form.Control 
             required
            type="text"  
            name="TituloOtorgado" 
            value={educacion.TituloOtorgado || ''} 
            onChange={(e) => onFormEducacionChange(e, 'TituloOtorgado')} data-index={index} style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Estado de estudios:</Form.Label>
            <Form.Control
             required 
            type="text"  
            name="EstadoEstudio" 
            value={educacion.EstadoEstudio || ''} 
            onChange={(e) => onFormEducacionChange(e, 'EstadoEstudio')} data-index={index} style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>


    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Fecha de expedición:</Form.Label>
            <DatePicker
             required
            id={`FechaExpedicion-${index}`}
            selected={typeof educacion.FechaExpedicion  === 'string' && educacion.FechaExpedicion.trim() !== '' ? parseISO(educacion.FechaExpedicion):educacion.FechaExpedicion }
            onChange={(date)=>{onFechaEducacionChange(date,'FechaExpedicion', index)}}
            className='form-control custom-datepicker'
            dateFormat='dd/MM/yyyy'
            style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Año de inicio de estudios:</Form.Label>
            <DatePicker
             required
            id={`InicioEstudio-${index}`}
 
              

            selected={typeof educacion.InicioEstudio === 'string' && educacion.InicioEstudio.trim() !== '' ? parseISO(educacion.InicioEstudio):educacion.InicioEstudio}
            onChange={(date)=>{onFechaEducacionChange(date,'InicioEstudio', index)}}
            className='form-control custom-datepicker'
            dateFormat='dd/MM/yyyy'
            style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
            <Form.Label className='control-label required'>Año de término de estudios:</Form.Label>
            <DatePicker
             required
            id={`TerminoEstudio-${index}`}
            //     {typeof formulario.FechaInicial === 'string' && formulario.FechaInicial.trim() !== '' 
        //                         ? parseISO(formulario.FechaInicial)
        //                         : formulario.FechaInicial}
            selected={typeof educacion.TerminoEstudio === 'string' && educacion.TerminoEstudio.trim() !== '' ? parseISO(educacion.TerminoEstudio):educacion.TerminoEstudio}
            onChange={(date)=>{onFechaEducacionChange(date,'TerminoEstudio', index)}}
            className='form-control custom-datepicker'
            dateFormat='dd/MM/yyyy'
            style={{ height: '40px' }}
            />
             <Form.Control.Feedback type="invalid">
                Este campo es requerido.
            </Form.Control.Feedback>
    </Form.Group>


    <div className="d-flex justify-content-end">
           <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarEducacion(event, index);elimiEducacion(event, index)}}></Button>
        {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
    </div>
   <hr/>
    </div>
    </div>
  )
}

export default Educacion