
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { paises } from './paises';
import { nacionalidad } from './nacionalidad';
import { provinciasRD } from './provincias';
import React, { useEffect, useRef, useState } from 'react';
import  Axios  from 'axios';
//...
import {Url} from '../../Url/URL';
import PerfilPrueba from '../Select/SelectComp';

import FlatpickrDatePicker from '../flatpickr/Flatpickr'
//import MyCalendar from '../../../components/reactCalendar/calendar'
import 'flatpickr/dist/flatpickr.min.css';
import PhoneField from '../../PhoneField/PhoneField';



const Profile = ({Subscription, setSubscription, Col, id, setError,error}) => {


       useEffect(() => {

                Axios.get(`${Url}Profile/${id}`).then((response)=>{

                const firstProfile = response.data[0];
                       console.log('Perfil:', firstProfile,'Aquiiii');
                if(firstProfile != undefined)
                {
                       
                        Subscription.idSubscription = firstProfile.idSubscription;
                        if( Subscription.idSubscription == id){
                                setSubscription(firstProfile);
                               
                                
                                
                        }

                        
                }
                        
                }).catch((response)=>{
                        console.error('Error al obtener la lista de archivos:', response);
                });


       }, []);

    //..................................................
    
  const [isValid, setIsValid] = useState(true); // Define isValid en el estado del componente

  const onInputChangeDate = (value, name) => {
        const date = value instanceof Date ? value.toISOString() : value;
      
        let _Subscription = { ...Subscription };
        _Subscription[name] = date;
        setSubscription(_Subscription);
      
        // Lógica de validación de fecha
        if (date !== '') {
          setIsValid(true); // La fecha es válida
        } else {
          setIsValid(false); // La fecha no es válida
        }
      };

    //............................................
        const onInputChange = (e, name,) => {
              
                let val = (e.target && e.target.value) || '';
                 if(val==''){
                        val = e != null ? e : '';
                 }
                let _Subscription = { ...Subscription };
                _Subscription[`${name}`] =  val.toString();
                setSubscription(_Subscription);

        };
//....................................................

        const onInputChangeS = (Value,name) => {
                const {value}=Value;
                const val = (value) || '';

               
                console.log(val +" "+name)
                
                let _Subscription = { ...Subscription };
                _Subscription[`${name}`] =  val.toString();
                setSubscription(_Subscription);

               
                setError({
                        ...error,
                        [`${name}`]: null,
                      });
                
        };
//............................................................
        const handleSeleccion = (e) => {
                   const{value}=e;
                if (value === 'No') {
                  Subscription.relationshipName="Vacío";
                  Subscription.relationshipLandline="Vacío";
                  setSubscription(Subscription);
                }
              };
             
             // handleSeleccion(Subscription.ParentescoEmergente);
        
             //.............................
             const suppliers = [
                {label:'Si',value:'Si'},
                {label:'No',value:'No'},
            ]

            const EstadoSiv = [
                {label:'Soltero',value:'Soltero'},
                {label:'Casado',value:'Casado'},
            ]

            const TipoDoc = [
                {label:'Cédula',value:'Cédula'},
                {label:'Pasaporte',value:'Pasaporte'},
            ]
            
            
            const Sex = [
                {label:'Masculino',value:'Masculino'},
                {label:'Femenino',value:'Femenino'},
            ]


            const formattedArray = provinciasRD.map((item) => ({
                label: item.nombre,
                value: item.nombre
              }));
              
              const Nac = paises.map((item) => ({
                label: item.nacionalidad,
                value: item.nacionalidad
              }));
              
              const PaisNac = paises.map((item) => ({
                label: item.nombre,
                value: item.nombre
              }));
             //...................................
              

  return (


    <div className=''>
        <div className='col-lg-12 row'>
        <h5 >Datos personales:</h5>
        <hr/>

        
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombre:</Form.Label>
                        <Form.Control  required type="text" name="name" 
                        value= {Subscription.name || ''}
                        onChange={(e)=>{onInputChange(e, 'name')}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Apellido:</Form.Label>
                        <Form.Control  required type="text"   name='lastName' value = { Subscription.lastName || ''}
                        onChange={(e)=>{onInputChange(e,"lastName")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Correo electrónico:</Form.Label>
                        <Form.Control  required type="text"   name='email' value = {Subscription.email || ''}
                        onChange={(e)=>{onInputChange(e,"email")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>




                
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Móvil:</Form.Label>

                        <PhoneField
                                value={Subscription.mobile || ''}
                                onChange={(e) => onInputChange(e, 'mobile')}
                        />
                       
                        
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfono fijo:</Form.Label>
                        <PhoneField
                                value={Subscription.landline || ''}
                                onChange={(e) => onInputChange(e, 'landline')}
                        />
                       
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>País de nacimiento:</Form.Label>
                        <PerfilPrueba error={error.countryBirth}  name="countryBirth" value={Subscription.countryBirth} onInputChangeS={(e)=>{onInputChangeS(e,'countryBirth')}} option={PaisNac}/>
                       
                </Form.Group>
                
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nacionalidad:</Form.Label>

                        <PerfilPrueba error={error.nationality}  name="nationality" value={Subscription.nationality} onInputChangeS={(e)=>{onInputChangeS(e,'nationality')}} option={Nac}/>
                       
                </Form.Group>
                
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Sexo:</Form.Label>
                        <PerfilPrueba error={error.sex}  name="sex" value={Subscription.sex} onInputChangeS={(e)=>{onInputChangeS(e,'sex')}} option={Sex}/>
                              
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFil">
                                <Form.Label className='control-label required'>Fecha de nacimiento:</Form.Label>

                                <FlatpickrDatePicker
                                
                                selectedDate={Subscription.birthDate || ''}
                                onDateChange={(date) => onInputChangeDate(date, 'birthDate')}
                                isValid={isValid} // Booleano que indica si el campo es válido o no
                                feedbackMessage="Este campo es requerido"
                                />
                </Form.Group>
               

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Tipo de documento:</Form.Label>
                        <PerfilPrueba error={error.documentType}  name="documentType" value={Subscription.documentType} onInputChangeS={(e)=>{onInputChangeS(e,'documentType')}} option={TipoDoc}/>
                     
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Número de documento:</Form.Label>
                        <Form.Control  required type="text"   name='documentNumber' value = {Subscription.documentNumber || ''}
                        onChange={(e)=>{onInputChange(e,"documentNumber")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Estado civil:</Form.Label>
                        <PerfilPrueba error={error.civilStatus}  name="civilStatus" value={Subscription.civilStatus} onInputChangeS={(e)=>{onInputChangeS(e,'civilStatus')}} option={EstadoSiv}/>
                       
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Provincia:</Form.Label>
                        <PerfilPrueba error={error.province}  name="province" value={Subscription.province} onInputChangeS={(e)=>{onInputChangeS(e,'province')}} option={formattedArray}/>
                      
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene licencia de conducir?</Form.Label>

                        <PerfilPrueba error={error.driverLicense}  name="driverLicense" value={Subscription.driverLicense} onInputChangeS={(e)=>{onInputChangeS(e,'driverLicense')}} option={suppliers}/>
                       
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Posee vehículo?</Form.Label>

                        <PerfilPrueba error={error.ownsVehicle}  name="ownsVehicle" value={Subscription.ownsVehicle} onInputChangeS={(e)=>{onInputChangeS(e,'ownsVehicle')}} option={suppliers}/>
                       
                </Form.Group>

                <h5 >En caso de emergencia:</h5>

                <hr/>
                
                {Subscription.relationship==''||Subscription.relationship=='No' ?

                (<div className='row'>
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>¿Tiene a quien llamar en caso de emergencia?</Form.Label>

                                <PerfilPrueba error={error.relationship}  name="relationship" value={Subscription.relationship} onInputChangeS={(e)=>{handleSeleccion(e);onInputChangeS(e,'relationship')}} option={suppliers}/>
                               
                        </Form.Group>
                </div>):( 
                <div className='row'>
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene a quien llamar en caso de emergencia?</Form.Label>

                        <PerfilPrueba error={error.relationship}  name="relationship" value={Subscription.relationship} onInputChangeS={(e)=>{handleSeleccion(e);onInputChangeS(e,'relationship')}} option={suppliers}/>
                       
                        </Form.Group>
                        
                
                        
                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="formfile">
                                <Form.Label >Nombre:</Form.Label>
                                <Form.Control  required type="text" name='relationshipName' value = {Subscription.relationshipName || ''}
                                onChange={(e)=>{onInputChange(e,"relationshipName")}}
                                
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 col-12 col-lg-4 form-control-lg" controlId="exampleForm.ControlTextarea1">
                                <Form.Label >Teléfono:</Form.Label>
                                <Form.Control  required type="text" name='relationshipLandline' value = {Subscription.relationshipLandline || ''}
                                onChange={(e)=>{onInputChange(e,"relationshipLandline")}}
                                
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                        </Form.Group>
                </div>)}
                
             
                <h5 >Parentesco:</h5>

                <hr/>
                 
                <Form.Group as={Col} className="mb-3 col-12 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Posee usted parentesco (familiaridad) con algún colaborador de la institución?</Form.Label>

                        <PerfilPrueba error={error.relationshipWork }  name="relationshipWork" value={Subscription.relationshipWork } onInputChangeS={(e)=>{onInputChangeS(e,'relationshipWork')}} option={suppliers}/>
                        
                </Form.Group>
                
                <h5 >Preguntas:</h5>
                <hr/>
                <Form.Group as={Col} className="mb-3 col-12 col-lg-12 form-control-lg" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='control-label required'>¿Sueldo al que aspira?</Form.Label>
                        <Form.Control  required type="text" name='salaryDesired' value = {Subscription.salaryDesired || ''}
                        onChange={(e)=>{onInputChange(e,"salaryDesired")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-12 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Desempeña o ha desempeñado durante los últimos (3) años una posición en la administración pública o ha sido catalogado como una persona políticamente expuesta?</Form.Label>

                        <PerfilPrueba error={error.Question}  name="Question" value={Subscription.Question} onInputChangeS={(e)=>{onInputChangeS(e,'Question')}} option={suppliers}/>
                      
                </Form.Group>

                <Form.Group className="mb-3 col-12 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene usted algún pariente hasta el segundo grado de afinidad o consanguinidad (padre, madre, hijos, cónyuge, hermanos) que desempeña o ha desempeñado durante los últimos (3) años una posición en Administración Pública o ha sido catalogado como una persona políticamente expuesta?</Form.Label>

                        <PerfilPrueba error={error.relationshipQuestion}  name="relationshipQuestion" value={Subscription.relationshipQuestion} onInputChangeS={(e)=>{onInputChangeS(e,'relationshipQuestion')}} option={suppliers}/>

                       
                        
                </Form.Group>


                
                


        </div>
     </div>
   
  )



  
}

export default Profile