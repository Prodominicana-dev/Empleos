
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
//....
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';




const InformacionPerfil = ({Suscripcion, setSuscripcion, Col, Id, setError,error}) => {
        const [desactivarCampos, setDesactivarCampos] = useState(false);
     
     

       useEffect(() => {

                Axios.get(`${Url}InformePerfil/${Id}`).then((response)=>{
                if(response.data != undefined)
                {
                       
                        Suscripcion.IdSuscripcion = response.data.IdSuscripcion;
                        if( Suscripcion.IdSuscripcion == Id){
                                setSuscripcion(response.data);
                               
                                
                                
                        }

                        
                }
                        
                }).catch((response)=>{
                        console.error('Error al obtener la lista de archivos:', response);
                });


       }, []);
       
      

    //............................................
        const onInputChange = (e, name,) => {
                
                const val = (e.target && e.target.value) || '';
                let _Suscripcion = { ...Suscripcion };
                _Suscripcion[`${name}`] =  val.toString();
                setSuscripcion(_Suscripcion);

        };

        const onFechaInputChange = (value, name) => {

                let _Suscripcion = { ...Suscripcion };
                _Suscripcion[`${name}`] =  value
                setSuscripcion(_Suscripcion);

        };

        const onInputChangeS = (Value,name) => {

                const {value}=Value;
                const val = (value) || '';
                console.log(val +" "+name)
                
                let _Suscripcion = { ...Suscripcion };
                _Suscripcion[`${name}`] =  val.toString();
                setSuscripcion(_Suscripcion);

                setError({
                        ...error,
                        [`${name}`]: null,
                      });
        };

        const handleSeleccion = (e) => {

                const{value}=e;

                if (value === 'No') {
                  Suscripcion.NombreParentesco="Vacío";
                  Suscripcion.TelefonoParentesco="Vacío";
                  setSuscripcion(Suscripcion);
                }

        };
             
            
        
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

        
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nombre:</Form.Label>
                        <Form.Control  required type="text" name="Nombre" 
                        value= {Suscripcion.Nombre || ''}
                        onChange={(e)=>{onInputChange(e, 'Nombre')}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Apellido:</Form.Label>
                        <Form.Control  required type="text"   name='apellido' value = { Suscripcion.Apellidos || ''}
                        onChange={(e)=>{onInputChange(e,"Apellidos")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Correo electrónico:</Form.Label>
                        <Form.Control  required type="text"   name='email' value = {Suscripcion.Email || ''}
                        onChange={(e)=>{onInputChange(e,"Email")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Móvil:</Form.Label>
                        <Form.Control  required type="text"   name='movil' value = { Suscripcion.Movil || ''}
                        onChange={(e)=>{onInputChange(e,"Movil")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Teléfono fijo:</Form.Label>
                        <Form.Control  required type="text"   name='telefono' value = {Suscripcion.TelefonoFijo || ''}
                        onChange={(e)=>{onInputChange(e,"TelefonoFijo")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>País de nacimiento:</Form.Label>
                        <PerfilPrueba error={error.PaisNacimiento}  name="PaisNacimiento" value={Suscripcion.PaisNacimiento} onInputChangeS={(e)=>{onInputChangeS(e,'PaisNacimiento')}} option={PaisNac}/>
                        {/* <Form.Select  required name="pais" aria-label="Default select example" 
                        onChange={(e)=>{onInputChange(e,"PaisNacimiento")}}>
                        <option value={Suscripcion.PaisNacimiento || ''}>{Suscripcion.PaisNacimiento || 'Selecciona'}</option>
                        {paises.map((pais)=>(
                                <option key={pais.codigo} value={pais.nombre}>{pais.nombre}</option>
                        ))} 
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>
                
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Nacionalidad:</Form.Label>

                        <PerfilPrueba error={error.Nacionalidad}  name="Nacionalidad" value={Suscripcion.Nacionalidad} onInputChangeS={(e)=>{onInputChangeS(e,'Nacionalidad')}} option={Nac}/>
                        {/* <Form.Select  required name="nacionalidad" aria-label="Default select example"
                        onChange={(e)=>{onInputChange(e,"Nacionalidad")}}>
                        <option value={Suscripcion.Nacionalidad || ''}>{Suscripcion.Nacionalidad || 'Selecciona'}</option>
                        {nacionalidad.map((nacionalidad)=>(
                                <option key={nacionalidad.codigo} value={nacionalidad.nacionalidad}>{nacionalidad.nacionalidad}</option>
                        ))} 
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>
                
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Sexo:</Form.Label>
                        <PerfilPrueba error={error.Sexo}  name="Sexo" value={Suscripcion.Sexo} onInputChangeS={(e)=>{onInputChangeS(e,'Sexo')}} option={Sex}/>
                                {/* <Form.Select  required name="sexo" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"Sexo")}}>
                                        <option value={Suscripcion.Sexo || ''}>{Suscripcion.Sexo || 'Selecciona'}</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>Fecha de nacimiento:</Form.Label>
                                <DatePicker
                                required
                                id={`FechaNacimiento`}
                                selected={typeof Suscripcion.FechaNacimiento === 'string' && Suscripcion.FechaNacimiento.trim() !== ''  ? parseISO(Suscripcion.FechaNacimiento):Suscripcion.FechaNacimiento}
                                onChange={(date)=>{onFechaInputChange(date,'FechaNacimiento')}}
                                className='form-control custom-datepicker'
                                dateFormat='dd/MM/yyyy'
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es requerido.
                                </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Fecha de nacimiento:</Form.Label>
                                <Form.Control  required type="text"   name='nacimiento' value = {Suscripcion.FechaNacimiento || ''}
                                        onChange={(e)=>{onInputChange(e,"FechaNacimiento")}} style={{ height: '40px' }}/>
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group> */}

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Tipo de documento:</Form.Label>
                        <PerfilPrueba error={error.TipoDocumento}  name="TipoDocumento" value={Suscripcion.TipoDocumento} onInputChangeS={(e)=>{onInputChangeS(e,'TipoDocumento')}} option={TipoDoc}/>
                        {/* <Form.Select  required name="tipoDocumento" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"TipoDocumento")}}>
                        <option value={Suscripcion.TipoDocumento || ''}>{Suscripcion.TipoDocumento || 'Selecciona'}</option>
                        <option value="Cédula">Cédula</option>
                        <option value="Pasaporte">Pasaporte</option>
                        
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Número de documento:</Form.Label>
                        <Form.Control  required type="text"   name='numDocumento' value = {Suscripcion.NumeroDocumento || ''}
                        onChange={(e)=>{onInputChange(e,"NumeroDocumento")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Estado civil:</Form.Label>
                        <PerfilPrueba error={error.EstadoCivil}  name="EstadoCivil" value={Suscripcion.EstadoCivil} onInputChangeS={(e)=>{onInputChangeS(e,'EstadoCivil')}} option={EstadoSiv}/>
                        {/* <Form.Select  required name="civil" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"EstadoCivil")}}>
                        <option value={Suscripcion.EstadoCivil || ''}>{Suscripcion.EstadoCivil || 'Selecciona'}</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>Provincia:</Form.Label>
                        <PerfilPrueba error={error.Provincia}  name="Provincia" value={Suscripcion.Provincia} onInputChangeS={(e)=>{onInputChangeS(e,'Provincia')}} option={formattedArray}/>
                        {/* <Form.Select  required name="provincia" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"Provincia")}}>
                        <option value={Suscripcion.Provincia || ''}>{Suscripcion.Provincia || 'Selecciona'}</option>
                        {provinciasRD.map((provincia,index)=>(
                                <option key={index} value={provincia.nombre}>{provincia.nombre}</option>
                        ))} 
                        </Form.Select>
                        
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene licencia de conducir?</Form.Label>

                        <PerfilPrueba error={error.TieneLicenCondicir}  name="TieneLicenCondicir" value={Suscripcion.TieneLicenCondicir} onInputChangeS={(e)=>{onInputChangeS(e,'TieneLicenCondicir')}} option={suppliers}/>
                        {/* <Form.Select  required name="licencia" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"TieneLicenCondicir")}}>
                        <option value={Suscripcion.TieneLicenCondicir || ''}>{Suscripcion.TieneLicenCondicir || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Posee vehículo?,</Form.Label>

                        <PerfilPrueba error={error.PosseVehiculo}  name="PosseVehiculo" value={Suscripcion.PosseVehiculo} onInputChangeS={(e)=>{onInputChangeS(e,'PosseVehiculo')}} option={suppliers}/>
                        {/* <Form.Select  required name="vehiculo" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"PosseVehiculo")}}>
                        <option value={Suscripcion.PosseVehiculo || ''}>{Suscripcion.PosseVehiculo || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <h5 >En caso de emergencia:</h5>

                <hr/>
                
                {Suscripcion.ParentescoEmergente==''||Suscripcion.ParentescoEmergente=='No' ?

                (<div className='row'>
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                                <Form.Label className='control-label required'>¿Tiene a quien llamar en caso de emergencia?</Form.Label>

                                <PerfilPrueba error={error.ParentescoEmergente}  name="ParentescoEmergente" value={Suscripcion.ParentescoEmergente} onInputChangeS={(e)=>{handleSeleccion(e);onInputChangeS(e,'ParentescoEmergente')}} option={suppliers}/>
                                {/* <Form.Select  required name="ParentescoEmergente" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"ParentescoEmergente");handleSeleccion(e,)}}>
                                <option value={Suscripcion.ParentescoEmergente || ''}>{Suscripcion.ParentescoEmergente || 'Selecciona'}</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                        </Form.Group>
                </div>):( 
                <div className='row'>
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene a quien llamar en caso de emergencia?</Form.Label>

                        <PerfilPrueba error={error.ParentescoEmergente}  name="ParentescoEmergente" value={Suscripcion.ParentescoEmergente} onInputChangeS={(e)=>{handleSeleccion(e);onInputChangeS(e,'ParentescoEmergente')}} option={suppliers}/>
                        {/* <Form.Select  required name="ParentescoEmergente" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"ParentescoEmergente");handleSeleccion(e,)}}>
                        <option value={Suscripcion.ParentescoEmergente || ''}>{Suscripcion.ParentescoEmergente || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                        </Form.Group>
                        
                
                        
                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="exampleForm.ControlTextarea1">
                                <Form.Label >Nombre:</Form.Label>
                                <Form.Control  required type="text" name='nombreParentesco' value = {Suscripcion.NombreParentesco || ''}
                                onChange={(e)=>{onInputChange(e,"NombreParentesco")}}
                                disabled={desactivarCampos}
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 col-lg-4 form-control-lg" controlId="exampleForm.ControlTextarea1">
                                <Form.Label >Teléfono:</Form.Label>
                                <Form.Control  required type="text" name='telefParentesco' value = {Suscripcion.TelefonoParentesco || ''}
                                onChange={(e)=>{onInputChange(e,"TelefonoParentesco")}}
                                disabled={desactivarCampos}
                                style={{ height: '40px' }}
                                />
                                <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                        </Form.Group>
                </div>)}
                
             
                <h5 >Parentesco:</h5>

                <hr/>
                 
                <Form.Group as={Col} className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Posee usted parentesco (familiaridad) con algún colaborador de la institución?</Form.Label>

                        <PerfilPrueba error={error.ParienteTrabajo}  name="ParienteTrabajo" value={Suscripcion.ParienteTrabajo} onInputChangeS={(e)=>{onInputChangeS(e,'ParienteTrabajo')}} option={suppliers}/>
                        {/* <Form.Select  required name="ParentescoEmergente" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"ParentescoEmergente");handleSeleccion(e,)}}>
                        <option value={Suscripcion.ParentescoEmergente || ''}>{Suscripcion.ParentescoEmergente || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>
                
                <h5 >Preguntas:</h5>
                <hr/>
                <Form.Group as={Col} className="mb-3 col-lg-12 form-control-lg" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='control-label required'>¿Sueldo al que aspira?</Form.Label>
                        <Form.Control  required type="text" name='aspiSueldo' value = {Suscripcion.SuleldoAspira || ''}
                        onChange={(e)=>{onInputChange(e,"SuleldoAspira")}} style={{ height: '40px' }}/>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Desempeña o ha desempeñado durante los últimos (3) años una posición en la administración pública o ha sido catalogado como una persona políticamente expuesta?</Form.Label>

                        <PerfilPrueba error={error.preguntaEmpleado}  name="preguntaEmpleado" value={Suscripcion.preguntaEmpleado} onInputChangeS={(e)=>{onInputChangeS(e,'preguntaEmpleado')}} option={suppliers}/>
                        {/* <Form.Select  required name="pregEmpleado" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"preguntaEmpleado")}}>
                        <option value={Suscripcion.preguntaEmpleado || ''}>{Suscripcion.preguntaEmpleado || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es requerido.</Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group className="mb-3 col-lg-12 form-control-lg" controlId="formFile">
                        <Form.Label className='control-label required'>¿Tiene usted algún pariente hasta el segundo grado de afinidad o consanguinidad (padre, madre, hijos, cónyuge, hermanos) que desempeña o ha desempeñado durante los últimos (3) años una posición en Administración Pública o ha sido catalogado como una persona políticamente expuesta?</Form.Label>

                        <PerfilPrueba error={error.PreguntaPariente}  name="PreguntaPariente" value={Suscripcion.PreguntaPariente} onInputChangeS={(e)=>{onInputChangeS(e,'PreguntaPariente')}} option={suppliers}/>

                        {/* <Form.Select hasValidation required name="pregEmpleado2" aria-label="Default select example" onChange={(e)=>{onInputChange(e,"PreguntaPariente")}}>
                        <option value={Suscripcion.PreguntaPariente || ''}>{Suscripcion.PreguntaPariente || 'Selecciona'}</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        </Form.Select> */}
                        
                </Form.Group>


                
                


        </div>
     </div>
   
  )



  
}

export default InformacionPerfil