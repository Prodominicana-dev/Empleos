import { Button } from 'primereact/button';
 import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import React, { useEffect, useRef, useState } from 'react';
import  Axios  from 'axios';
import { Accordion, AccordionTab } from 'primereact/accordion';

import 'bootstrap/dist/css/bootstrap.min.css';
//import {useRouter} from 'next/router';
import { Toast } from 'primereact/toast';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//....................
import Documentos from '../../components/Formularios/Documento';
import ImagenPerf from '../../components/Formularios/ImagenPerf'
import InformacionPerfil from '../../components/Formularios/InformacionPerfil/InformacionPerfil';
import ExperienciaLaboral from '../../components/Formularios/ExperienciaLaboral';
import Educacion from '../../components/Formularios/Educacion';
import Formacion from '../../components/Formularios/Formacion';
import Idiomas from '../../components/Formularios/idiomas/Idiomas.jsx';
import ReferenciasPersonales from '../../components/Formularios/ReferenciasPersonales';
import ReferenciasLaborales from '../../components/Formularios/ReferenciasLaborales';
import VacantesForm from 'component/components/Formularios/VacantesFormulario/vacantesForm';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
//................
import style from '../../styles/formulario.module.css'
//Post..........................
import { PostPerfil,PostExperienciaLaboral,PostEducacion,PostFormacion,PostIdioma,PostReferenciasPersonales,PostReferenciasLaborales,PostPuestoSolicitado,PutPerfil,PutExperienciaLaboral,PutEducacion,PutFormacion,PutIdioma,PutReferenciasPersonales,PutReferenciasLaborales,PutPuestoSolicitado,GetExperienciaLaboral,GetEducacion,DeleteExperienciaLaboral,GetFormacion,GetIdioma,GetReferenciasPersonales,GetReferenciasLaborales,DeleteEducacion,DeleteFormacion,DeleteIdioma,DeleteReferenciasPersonales,DeleteReferenciasLaborales } from '../../components/postPutyGet/PostPerfil';
import { EliminarPuestoSolicitado } from '../../components/Formularios/VacantesFormulario/puestosolicitado';
//...........
import {Url} from '../../components/Url/URL';

const Formulario = (data) => {
   
  const {Id,Nombre,Email}=data.data;

   let datosPerfil={
      IdSuscripcion:0,
      Nombre:'',
      Apellidos:'',
      Email:'',
      Movil:'',
      TelefonoFijo:'',
      PaisNacimiento:'',
      Nacionalidad:'',
      Sexo:'',
      FechaNacimiento:'',
      TipoDocumento:'',
      NumeroDocumento:'',
      EstadoCivil:'',
      Provincia:'',
      ParienteTrabajo:'',
      TieneLicenCondicir:'',
      PosseVehiculo:'',
      ParentescoEmergente:'',
      NombreParentesco:'',
      TelefonoParentesco:'',
      SuleldoAspira:'',
      preguntaEmpleado:'',
      PreguntaPariente:''  
    }

   let pustosSoli={
      IdSuscripcion:0,
      IdVacante:0
    }





    
  


const [validated, setValidated] = useState(false); 
//const { register,onSumbmit, errors } = useForm();
//accordion..........
const [activeIndex , setActiveIndex] = useState([2,3]);
//imagen........
const [imagen, setImagen] = useState([]);
//documento..........
const [files, setFiles] = useState([]);

//perfil.............
//const [state, setState] = useState([]);
const [Suscripcion, setSuscripcion] = useState(datosPerfil);
//..........
const [formularios, setFormularios] = useState([]);
//Idioma............
const [idioma, setIdioma] = useState([]);
//referencias personales.....................
const [referenciasPersonales, setReferenciasPersonales] = useState([])
//referencias Laborales......................
const [referenciasLaborales, setReferenciasLaborales] = useState([])
//.......
const [educacion, setEducacion] = useState([]);
const [formacion, setFormacion]=useState([])
//const [error, setError] = useState('');
//.........
const toast = useRef(null);
//puesto solisitado.........
const [target, setTarget] = useState([]);
const [target02, setTarget02] = useState([]);
const [targetPlus, setTargetPlus] = useState([]);
//......................................
const [elimExperiencia, setElimExperiencia] = useState([]);
//......................................
const [elimEducacion, setElimEducacion] = useState([]);
//elimFormacion....................................................
const [elimFormacion, setElimFormacion] = useState([]);
//elimIdioma...................................................
const [elimIdioma, setElimIdioma] = useState([]);
//elimReferenciasPersonales..................................................
const [elimReferenciasPersonales, setElimReferenciasPersonales] = useState([]);
//elimReferenciasLaborales...................................................
const [elimReferenciasLaborales, setElimReferenciasLaborales] = useState([]);



//validarProvincia perfil..........................................................
const [errorProvincia, setErrorProvincia] = useState(null)

//.............................................
const [selectedOption, setSelectedOption] = useState({});
const [error, setError] = useState({});
const [errorS, setErrorS] = useState({});
const router = useRouter();

//cabecera................
const headerSuscriptor=()=>
(
        <div>
            <div><h2>{Nombre}</h2></div>
            <div><h5>{Email}</h5></div>
        </div>
);

// console.log(target02);
 //console.log(targetPlus);
// const onInputChange = (e, name) => {
//     console.log(e.target.value)
//     const val = (e.target && e.target.value) || '';
//     let _Suscripcion = { ...Suscripcion };
//     _Suscripcion[`${name}`] = val;

//     setSuscripcion(_Suscripcion);
// };
// ..............................
useEffect(() => {
  async function obtenerDatosExperiencia() {
    try {
      const Experiencia = await GetExperienciaLaboral(Id);
      if(Experiencia != undefined){
        //console.log(Experiencia)
      setFormularios(Experiencia)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Experiencia Laboral:', error);
    }
  }

  obtenerDatosExperiencia();
}, []);
//GetEducacion(Id).........................  
useEffect(() => {
  async function obtenerDatosEducacion() {
    try {
      const Educacion = await GetEducacion(Id);
      if(Educacion != undefined){
        //console.log(Educacion)
        setEducacion(Educacion)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Educacion:', error);
    }
  }

  obtenerDatosEducacion();
}, []); 
//GetFormacion(Id)................................  
useEffect(() => {
  async function obtenerDatosFormacion() {
    try {
      const formacion = await GetFormacion(Id);
      if(formacion != undefined){
        //console.log(formacion)
        setFormacion(formacion)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Formacion:', error);
    }
  }

  obtenerDatosFormacion();
}, []); 
//GetIdioma(Id)............................................
useEffect(() => {
  async function obtenerDatosIdioma() {
    try {
      const Idioma = await GetIdioma(Id);
      if(Idioma != undefined){
        //console.log(Idioma)
        setIdioma(Idioma)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Idioma:', error);
    }
  }

  obtenerDatosIdioma();
}, []); 
//GetReferenciasPersonales(Id).....................................................
useEffect(() => {
  async function obtenerDatosReferenciasPersonales() {
    try {
      const ReferenciasPersonales = await GetReferenciasPersonales(Id);
      if(ReferenciasPersonales != undefined){
        //console.log(ReferenciasPersonales)
        setReferenciasPersonales(ReferenciasPersonales)
    }
    } catch (error) {
      console.error('Error al obtener los datos de las Referencias Personales:', error);
    }
  }

  obtenerDatosReferenciasPersonales();
}, []); 
//GetReferenciasLaborales(Id)...........................................................
useEffect(() => {
  async function obtenerDatosReferenciasLaborales() {
    try {
      const ReferenciasLaborales = await GetReferenciasLaborales(Id);
      if(ReferenciasLaborales != undefined){
        //console.log(ReferenciasLaborales)
        setReferenciasLaborales(ReferenciasLaborales)
    }
    } catch (error) {
      console.error('Error al obtener los datos de las Referencias Laborales:', error);
    }
  }

  obtenerDatosReferenciasLaborales();
}, []); 
//............................................
const validateArray = (arr) => {
  const newError = [];
  
  arr.forEach((item, index) => {
    const itemErrors = {}; // Objeto para almacenar errores específicos del elemento

    for (const key in item) {
      if (!item[key]) {
        itemErrors[key] = 'Por favor, selecciona una opción.';
      }
    }

    newError[index] = itemErrors; // Agregar los errores del elemento al array de errores
  });

  setError(newError); // Actualizar el estado de errores
};


const handleSubmit = async(event)=>{
event.preventDefault();

//Suscripcion.IdSuscripcion=Id;


    


    //documento..........
    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('archivo', files[i]);
        formData.append('IdSuscripcion', Id);
  
        await Axios.post(`${Url}Curriculum`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log('Archivo subido exitosamente');
      }
  
     
    } catch (error) {
      console.error('Error al subir el archivo', error);
    }

    //.........................................
     //imagen..........
     try {
      console.log(imagen)
     if(imagen.length != 0){
        const formData = new FormData();
        formData.append('imagen', imagen);
        formData.append('IdSuscripcion', Id);
  
        await Axios.post(`${Url}Imagen`, formData);
  
        console.log('imagen subido exitosamente');
   
  
      }
    } catch (error) {
      console.error('Error al subir el imagen', error);
    }

    //.........................................



  
       
      

       





         
    Suscripcion.IdSuscripcion=Id;
 
        
    //...............................
    let Formulario =[...formularios.concat(educacion).concat(formacion).concat(idioma).concat(referenciasPersonales).concat(referenciasLaborales),Suscripcion]
    console.log(Formulario)
    //Validacion.................................
    const algunCampoVacio = Formulario.some(objeto => {
      return Object.values(objeto).some(value => value === '');
    });

    if(algunCampoVacio){

            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Campo requerido por llenar', life: 3000 })

            //Validacion Select.........................
            const newError = {};
                      
            for (const name in Suscripcion) {
              if (!Suscripcion[name]) {
                newError[name] = 'Por favor, selecciona una opción.';
                setErrorS(newError);
               
              }
            }  

            validateArray(idioma);


                
    }
    else
    {
         //Validacion Select.........................
          const newError = {};
          
          for (const name in Suscripcion) {
            if (!Suscripcion[name]) {
              newError[name] = 'Por favor, selecciona una opción.';
              setError(newError);
              toast.current.show({ severity: 'error', summary: 'Error', detail: 'Campo requerido por llenar', life: 3000 })
            return;
            }
          }  

     
     try
     {

    //  let IdPerfil=Suscripcion.Id;
      Axios.get(`${Url}InformePerfil/${Id}`).then((response)=>{
        if(response.data != undefined)
        {
          Suscripcion.IdSuscripcion = response.data.IdSuscripcion;
          Suscripcion.Nombre=response.data.Nombre;
          //IdPerfil=response.data.Id
        }
        
      }).catch((response)=>{
        console.error('Error al obtener la lista de archivos:', response);
      });
//...................................
 // Agrega un arreglo de dependencias vacío

 //.....................................
      
//......................................


        
          //Puesto Solicitado........................
           EliminarPuestoSolicitado(Id,target02);
           //console.log(target)
          //Puesto Solicitado........................
        //   for (let i = 0; i < target.length; i++) {
        //     pustosSoli.IdSuscripcion=Id;
        //     pustosSoli.IdVacante=target[i].Id;
            
        //     PostPuestoSolicitado(pustosSoli)
        //  }

         for (let i = 0; i < targetPlus.length; i++) {
          console.log(Id)
          pustosSoli.IdSuscripcion=Id;
          pustosSoli.IdVacante=targetPlus[i].Id;
          
          PostPuestoSolicitado(pustosSoli)
       }
          //perfil...................................

          //Suscripcion.IdSuscripcion=Id;
          //console.log(Id);
          console.log(Suscripcion);
          PutPerfil(Suscripcion);
          
          //Experiencia Laboral Externa..............
          PutExperienciaLaboral(formularios);
          DeleteExperienciaLaboral(elimExperiencia);
          console.log(elimExperiencia);
          //Educacion................................
          PutEducacion(educacion);
          DeleteEducacion(elimEducacion);
          console.log(elimEducacion);
          //Formacion................................
          PutFormacion(formacion);
          DeleteFormacion(elimFormacion);
          //Idioma...................................
          PutIdioma(idioma);
          DeleteIdioma(elimIdioma);
          //Referencias Personales..........................
          PutReferenciasPersonales(referenciasPersonales);
          DeleteReferenciasPersonales(elimReferenciasPersonales);
          console.log(elimReferenciasPersonales);
          //Referencias Laborales...........................
          PutReferenciasLaborales(referenciasLaborales);
          DeleteReferenciasLaborales(elimReferenciasLaborales);
         
        
     


//console.long(elimExperiencia);
        router.push('/FormEnviado');

    }catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  }
    setValidated(true);
  
};


const agregarFormulario = (event) => {
        event.preventDefault();
        setFormularios((prevFormularios) => [
          ...prevFormularios,
          { 
                IdSuscripcion: Suscripcion.IdSuscripcion || Id,
                FechaInicial:'',
                FechaFinal:'',
                NombreCompania:'',
                Puesto:'',
                Salario:'',
                AreaPuesto:'',
                Industria:'',
                Supervisor:'',
                FuncionesLogros:'',
                Telefono:''
          }
        ]);
      };
      
 const eliminarFormulario = (event, index) => {
        event.preventDefault();
        setFormularios((prevFormularios) => {
          const nuevosFormularios = [...prevFormularios];
         
          nuevosFormularios.splice(index, 1);
          return nuevosFormularios;
        });
      };

const eliminarExperiencia=(event, index)=>{
  event.preventDefault();
  
  const eliminarExpe = formularios[index];

  let eliminarExpo = [...elimExperiencia];

  eliminarExpo.push(eliminarExpe);

  setElimExperiencia(eliminarExpo);
}




const onFechaChange = (date, name, index) => {
    const updatedFormularios = [...formularios];
    updatedFormularios[index][name] = date;
    setFormularios(updatedFormularios);
};
const onFormChange = (e, name) => {
    const val = e.target.value;
    const index = e.target.dataset.index;

    setFormularios((prevFormularios) => {
      const nuevosFormularios = [...prevFormularios];
      nuevosFormularios[index][name] = val;
      return nuevosFormularios;
    });
  };

//Educacion.............................................................................
const eliminarEducacion = (event,index) => {
    event.preventDefault();
    const nuevosEducacion = [...educacion];
    nuevosEducacion.splice(index, 1);
    setEducacion(nuevosEducacion);
};

const elimiEducacion=(event, index)=>{
  event.preventDefault();
  
  const eliminarEdu = educacion[index];

  let eliminarEd = [...elimEducacion];

  eliminarEd.push(eliminarEdu);
  
  setElimEducacion(eliminarEd);
}

const onFechaEducacionChange = (value, name, index) => {
  setEducacion((prevEducacion) => {
    const nuevosEducacion = [...prevEducacion];
    nuevosEducacion[index][name] = value;
    return nuevosEducacion;
  });
};
const onFormEducacionChange = (e, name) => {
    const val = e.target.value;
    const index = e.target.dataset.index;
  
    setEducacion((prevEducacion) => {
      const nuevosEducacion = [...prevEducacion];
      nuevosEducacion[index][name] = val;
      return nuevosEducacion;
    });
  };
const agregarFormEducacion = (event) => {
    event.preventDefault()
    setEducacion((prevEducacion) =>[...prevEducacion, {
      
      IdSuscripcion: Suscripcion.IdSuscripcion || Id,
      PreparacionAcademica:'',
      Institución:'',
      AreaEstudio:'',
      TituloOtorgado:'',
      EstadoEstudio:'',
      FechaExpedicion:'',
      InicioEstudio:'',
      TerminoEstudio:''
    
    }]);
};

//Dicusece....................
const eliminarDicusece = (event,index) => {
    event.preventDefault();
    const nuevosDicusece = [...formacion];
    nuevosDicusece.splice(index, 1);
    setFormacion(nuevosDicusece);
};

const elimiFormacion=(event, index)=>{
  event.preventDefault();
  
  const eliminarForma = formacion[index];

  let eliminarFor = [...elimFormacion];

  eliminarFor.push(eliminarForma);
  
  setElimFormacion(eliminarFor);
}

const onFechaDicuseceChange = (value, name, index) => {
  setFormacion((prevFormacion) => {
    const nuevosFormacion = [...prevFormacion];
    nuevosFormacion[index][name] = value;
    return nuevosFormacion;
  });
};
const onFormDicuseceChange = (e, name) => {
    const val = e.target.value;
    const index = e.target.dataset.index;
  
    setFormacion((prevFormacion) => {
      const nuevosFormacion= [...prevFormacion];
      nuevosFormacion[index][name] = val;
      return nuevosFormacion;
    });
  };
const agregarFormDicusece = (event) => {
    event.preventDefault()
    setFormacion((prevFormacion) =>[...prevFormacion, {
      
      IdSuscripcion: Suscripcion.IdSuscripcion || Id,
      Certificado:'',
      EstadoCerti:'',
      FechaInicio:'',
      FechaFinal:''
    
    }]);
};

//Idioma....................



const eliminarIdioma = (event,index) => {
  event.preventDefault();
  const nuevosIdioma = [...idioma];
  nuevosIdioma.splice(index, 1);
  setIdioma(nuevosIdioma);
};

const elimiIdioma=(event, index)=>{
  event.preventDefault();
  
  const eliminarIdioma = idioma[index];

  let eliminarIdio = [...elimIdioma];

  eliminarIdio.push(eliminarIdioma);
  
  setElimIdioma(eliminarIdio);
}

const agregarFormIdioma = (event) => {
  event.preventDefault()
  setIdioma((prevIdioma) =>[...prevIdioma, {
    
    IdSuscripcion: Suscripcion.IdSuscripcion || Id,
    Idioma:'',
    NombreInstitucion:'',
    NivelConversacion:'',
    NivelLectura:'',
    NivelEscritura:'',
    CapacidadTraducir:''
   
  
  }]);
};

//Referencias Personales....................
const eliminarReferenciasPersonales = (event,index) => {
  event.preventDefault();
  const nuevosReferenciasPersonales = [...referenciasPersonales];
  nuevosReferenciasPersonales.splice(index, 1);
  setReferenciasPersonales(nuevosReferenciasPersonales);
};

const elimiReferenciasPersonales=(event, index)=>{
  event.preventDefault();
  
  const eliminarReferenciasPersonales = referenciasPersonales[index];
  let eliminarRefPer = [...elimReferenciasPersonales];
  eliminarRefPer.push(eliminarReferenciasPersonales);
  setElimReferenciasPersonales(eliminarRefPer);
}

const onFormReferenciasPersonalesChange = (e, name) => {
  const val = e.target.value;
  const index = e.target.dataset.index;

  setReferenciasPersonales((prevReferenciasPersonales) => {
    const nuevosReferenciasPersonales = [...prevReferenciasPersonales];
    nuevosReferenciasPersonales[index][name] = val;
    return nuevosReferenciasPersonales;
  });
};
const agregarFormReferenciasPersonales = (event) => {
  event.preventDefault()
  setReferenciasPersonales((prevReferenciasPersonales) =>[...prevReferenciasPersonales, {
    
    IdSuscripcion: Suscripcion.IdSuscripcion || Id,
    NombreCompleto:'',
    Telefono:'',
    Ocupacion:''
   
  
  }]);
};

//Referencias Laborales....................
const eliminarReferenciasLaborales = (event,index) => {
  event.preventDefault();
  const nuevosReferenciasLaborales = [...referenciasLaborales];
  nuevosReferenciasLaborales.splice(index, 1);
  setReferenciasLaborales(nuevosReferenciasLaborales);
};
const elimiReferenciasLaborales=(event, index)=>{
  event.preventDefault();
  
  const eliminarReferenciasLaborales = referenciasLaborales[index];
  let eliminarRefLab = [...elimReferenciasLaborales];
  eliminarRefLab.push(eliminarReferenciasLaborales);
  setElimReferenciasLaborales(eliminarRefLab);
}
const onFormReferenciasLaboralesChange = (e, name) => {
  const val = e.target.value;
  const index = e.target.dataset.index;

  setReferenciasLaborales((prevReferenciasLaborales) => {
    const nuevosReferenciasLaborales = [...prevReferenciasLaborales];
    nuevosReferenciasLaborales[index][name] = val;
    return nuevosReferenciasLaborales;
  });
};
const agregarFormReferenciasLaborales = (event) => {
  event.preventDefault()
  setReferenciasLaborales((prevReferenciasLaborales) =>[...prevReferenciasLaborales, {
    
    IdSuscripcion: Suscripcion.IdSuscripcion || Id,
    NombreCompleto:'',
    Telefono:'',
    Profesion:'',
    Relacion:''
   
  
  }]);
};

return (
  <Layout pagina='Formulario'>
      <div className={style.space02}></div>
    <div className='container mb-8'>
         <div className="col-12">


                  

                    <Toast ref={toast} />
                    <Toolbar className="mb-4" 
                    left={headerSuscriptor} 
                     //right={header}
                    ></Toolbar>

                    
                                <div className="">

                                {/* <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
                                <FileList files={files} removeFile={removeFile} /> */}
                                  
                                 
                                  <div className="flex flex-wrap gap-2 mb-3 ">
                                      <Button icon={activeIndex && activeIndex.some((index) => index === 0|| index===1 || index===2||index===3||index===4||index===5||index===6||index===7||index===8||index===9) ? 'pi pi-minus' : 'pi pi-plus'} label={activeIndex && activeIndex.some((index) => index === 0|| index===1 || index===2||index===3||index===4||index===5||index===6||index===7||index===8||index===9) ? 'Cerrar todo' : 'Abrir todo'} onClick={activeIndex && activeIndex.some((index) => index === 0|| index===1 || index===2||index===3||index===4||index===5||index===6||index===7||index===8||index===9) ?  () => setActiveIndex(): () => setActiveIndex([0,1,2,3,4,5,6,7,8,9])} className="p-button-text" />
                                     
                                  </div>
                                  <Form 
                                  noValidate validated={validated} 
                                //    onSubmit={onSumbmit(handleSubmit)}
                                  >
              

           
                                  <Accordion 
                                  multiple 
                                  activeIndex={activeIndex} 
                                  onTabChange={(e) => setActiveIndex(e.index)}
                                  >
                                      <AccordionTab header="Imagen Perfil">

                                           <ImagenPerf setImagen={setImagen} />

                                      </AccordionTab>

                                      <AccordionTab header="Documentos">

                                           <Documentos setFiles={setFiles} />

                                      </AccordionTab>

                                      <AccordionTab header="Información Perfil">

                                           <InformacionPerfil  Suscripcion={Suscripcion} setSuscripcion={setSuscripcion } Col={Col} Id={Id} errorProvincia={errorProvincia} setError={setErrorS} error={errorS}/>
                                            
                                      </AccordionTab>

                                      <AccordionTab header="Puesto Solicitado">





                                          <VacantesForm  target={target} setTarget={setTarget} target02={target02} setTarget02={setTarget02} targetPlus={targetPlus} setTargetPlus={setTargetPlus} Id={Id}/>






                                      </AccordionTab>
                                      <AccordionTab header="Experiencia Laboral">

                                      {formularios.map((formulario,index) => (
                                       
                                           <ExperienciaLaboral key={index} formulario={formulario} onFechaChange={onFechaChange} onFormChange={onFormChange} eliminarFormulario={eliminarFormulario} eliminarExperiencia={eliminarExperiencia} index={index} Col={Col}/>
                                          
                                            ))}
                                      <div>
                                      <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormulario}><FontAwesomeIcon icon={faPlus} /></a>
                                      </div>
                                      </AccordionTab>
                                      <AccordionTab header="Educación">
                                      <div>
                                                { educacion.map((educacion, index) => (
                                                    <Educacion key={index} educacion={educacion} onFechaEducacionChange={onFechaEducacionChange} onFormEducacionChange={onFormEducacionChange} eliminarEducacion={eliminarEducacion} elimiEducacion={elimiEducacion} index={index} Col={Col}/>
                                          
                                                    
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormEducacion}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                            </div>
                                      </AccordionTab>
                                      <AccordionTab header="Formación Complementaria">
                                          
                                             <div>
                                                { formacion.map((dicusece, index) => (
                                                    
                                                    <Formacion key={index} dicusece={dicusece} onFechaDicuseceChange={onFechaDicuseceChange} onFormDicuseceChange={onFormDicuseceChange} eliminarDicusece={eliminarDicusece} elimiFormacion={elimiFormacion} index={index} Col={Col}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormDicusece}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                            </div>
                                      </AccordionTab>
                                      <AccordionTab header="Idiomas">
                                          <div>
                                                { idioma.map((idiomas, index) => (
                                                    
                                                    <Idiomas key={index} idiomas={idiomas} elimIdioma={elimIdioma}  elimiIdioma={elimiIdioma} eliminarIdioma={eliminarIdioma} index={index} Col={Col} error={error} setError={setError} setIdioma={setIdioma}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormIdioma}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                          </div>
                                      </AccordionTab>

                                      <AccordionTab header="Referencias personales">
                                          <div>
                                                { referenciasPersonales.map((referenciasPersonales, index) => (
                                                    
                                                    <ReferenciasPersonales key={index} referenciasPersonales={referenciasPersonales} onFormReferenciasPersonalesChange={onFormReferenciasPersonalesChange}  eliminarReferenciasPersonales={eliminarReferenciasPersonales} elimiReferenciasPersonales={elimiReferenciasPersonales} index={index} Col={Col}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormReferenciasPersonales}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                          </div>
                                      </AccordionTab>

                                      <AccordionTab header="Referencias Laborales">
                                          <div>
                                                { referenciasLaborales.map((referenciasLaborales, index) => (
                                                    
                                                    <ReferenciasLaborales key={index} referenciasLaborales={referenciasLaborales} onFormReferenciasLaboralesChange={onFormReferenciasLaboralesChange}  eliminarReferenciasLaborales={eliminarReferenciasLaborales} elimiReferenciasLaborales={elimiReferenciasLaborales} index={index} Col={Col}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormReferenciasLaborales}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                          </div>
                                      </AccordionTab>
                                  </Accordion>

                                  <div className="d-flex justify-content-end ">
                                    <Button className="mt-5 " label="Guardar" rounded text raised style={{height:'40px',width:'90px',fontSize:'19px'}} onClick={handleSubmit}></Button>
                                  </div>

                                 </Form>
                              </div>

              
                  
                
        
          </div>
          </div>
          <div className={style.space}></div>
          </Layout>
    );


};

export async function getServerSideProps({query:{index}}){
   
  const url = `${Url}Suscripcion/${index}`;
 

  const res = await fetch(url)
  const data = await res.json()

  
  return{
    props:{
          data
    }
  }

}

export default Formulario;