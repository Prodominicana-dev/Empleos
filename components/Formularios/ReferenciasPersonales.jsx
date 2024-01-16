import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import PhoneField from '../../components/PhoneField/PhoneField';

const PersonalReferences = ({PersonalReferences,onFormPersonalReferencesChange,eliminarPersonalReferences,elimiPersonalReferences, setPersonalReferences, index,Col}) => {

    const onPhonePersonalReferencesChange = (e, name, index) => {

        setPersonalReferences((prevPersonalReferences) => {
          const nuevosPersonalReferences = [...prevPersonalReferences];
          nuevosPersonalReferences[index][name] = e.toString();
          return nuevosPersonalReferences;
        });
      };

  return (




   
    

    <div className=''>

            <div className='row'>


                <Form.Group  as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombres y Apellidos:</Form.Label>
                        <Form.Control  required type="text"  name="fullName" 
                        value={PersonalReferences.fullName || ''} 
                        onChange={(e) => onFormPersonalReferencesChange(e, 'fullName',index)} style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfonos:</Form.Label>

                        <PhoneField
                            value={PersonalReferences.landline || ''}
                            onChange={(e) => onPhonePersonalReferencesChange(e, 'landline',index)}
                        />
                       
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Ocupación:</Form.Label>
                        <Form.Control  required type="text"  name="occupation" 
                        value={PersonalReferences.occupation || ''} 
                        onChange={(e) => onFormPersonalReferencesChange(e, 'occupation',index)}  style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                

            
                <div className="d-flex justify-content-end">
                        <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarPersonalReferences(event, index);elimiPersonalReferences(event, index)}}></Button>
                    
                </div>
                <hr/>
            </div>
     </div>
  )
}

export default PersonalReferences