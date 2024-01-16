import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import PhoneField from '../../components/PhoneField/PhoneField';

const ProfessionalReferences = ({ProfessionalReferences,onFormProfessionalReferencesChange,eliminarProfessionalReferences,elimiProfessionalReferences,setProfessionalReferences,index,Col}) => {

    const onPhoneProfessionalReferencesChange = (e, name, index) => {

        setProfessionalReferences((prevProfessionalReferences) => {
          const nuevosProfessionalReferences = [...prevProfessionalReferences];
          nuevosProfessionalReferences[index][name] = e.toString();
          return nuevosProfessionalReferences;
        });
      };

  return (
    <div className=''>

            <div className='row'>


                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombres y Apellidos:</Form.Label>
                        <Form.Control required type="text"  name="fullName" 
                        value={ProfessionalReferences.fullName || ''} 
                        onChange={(e) => onFormProfessionalReferencesChange(e, 'fullName',index)}  style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfonos:</Form.Label>

                        <PhoneField
                            value={ProfessionalReferences.landline || ''}
                            onChange={(e) => onPhoneProfessionalReferencesChange(e, 'landline',index)}
                        />
                        
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-12 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Profesión:</Form.Label>
                        <Form.Control required type="text"  name="profession" 
                        value={ProfessionalReferences.profession || ''} 
                        onChange={(e) => onFormProfessionalReferencesChange(e, 'profession', index)}  style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Relación:</Form.Label>
                        <Form.Control required type="text"  name="relationship" 
                        value={ProfessionalReferences.relationship || ''} 
                        onChange={(e) => onFormProfessionalReferencesChange(e, 'relationship', index)}  style={{ height: '40px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                </Form.Group>

            
                <div className="d-flex justify-content-end">
                        <Button className='mb-2 p-button-rounded'  icon="pi pi-trash" severity="warning" onClick={(event) => {eliminarProfessionalReferences(event, index);elimiProfessionalReferences(event, index)}}></Button>
                    {/* <a href="#"  className="mb-2 btn btn-danger rounded-circle"   onClick={() => eliminarEducacion(index)}><FontAwesomeIcon icon={faTrash}/></a> */}
                </div>
                <hr/>
            </div>
     </div>
  )
}

export default ProfessionalReferences