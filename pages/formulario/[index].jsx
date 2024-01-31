import { Button } from 'primereact/button';
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
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Col from 'react-bootstrap/Col';
//....................
import Documentos from '../../components/Formularios/Documento';
import MostrarPDF from '../../components/showPdf/PdfViewer';
import MostrarImg from '../../components/ShowImg/ImgViewer'
import ImagenPerf from '../../components/Formularios/ImagenPerf'
import Profile from '../../components/Formularios/InformacionPerfil/InformacionPerfil';
import WorkExperience from '../../components/Formularios/ExperienciaLaboral';
import Education from '../../components/Formularios/Educacion';
import Training from '../../components/Formularios/Formacion';
import Languages from '../../components/Formularios/idiomas/Idiomas.jsx';
import PersonalReferences from '../../components/Formularios/ReferenciasPersonales';
import ProfessionalReferences from '../../components/Formularios/ReferenciasLaborales';
//import VacantesForm from 'component/components/Formularios/VacantesFormulario/vacantesForm';
import { useRouter } from 'next/router';
import {useValidation} from '../../components/validationAssessment/useValidation '
import Layout from '../../components/Layout';
//................
import style from '../../styles/formulario.module.css'
//Post..........................
import { 
  PostPuestoSolicitado,
  PutPerfil,
  PutWorkExperience,
  PutEducation,
  PutTraining,PutLanguage,
  PutPersonalReferences,
  PutProfessionalReferences,
  GetWorkExperience,
  GetEducation,
  DeleteWorkExperience,
  GetTraining,
  GetLanguage,
  GetPersonalReferences,
  GetProfessionalReferences,
  DeleteEducation,
  DeleteTraining,
  DeleteLanguage,
  DeletePersonalReferences,
  DeleteProfessionalReferences } from '../../components/postPutyGet/PostPerfil';

import { EliminarPuestoSolicitado } from '../../components/Formularios/VacantesFormulario/puestosolicitado';
//...........
import {Url} from '../../components/Url/URL';

const Formulario = (data) => {
   
  const {id,name,email}=data.data;

   let datosPerfil={
      idSubscription:0,
      name:'',
      lastName :'',
      email:'',
      mobile :'',
      landline:'',
      countryBirth :'',
      nationality:'',
      sex :'',
      birthDate:'',
      documentType:'',
      documentNumber:'',
      civilStatus:'',
      province :'',
      driverLicense:'',
      ownsVehicle:'',
      relationship:'',
      relationshipName:'',
      relationshipLandline:'',
      relationshipWork:'',
      salaryDesired:'',
      Question :'',
      relationshipQuestion:''  
    }

   let pustosSoli={
      idSubscription:0,
      idJobOpening:0
    }





    
  


const [validated, setValidated] = useState(false); 
//const { register,onSumbmit, errors } = useForm();
//accordion..........
const [activeIndex , setActiveIndex] = useState([0,1,2]);
//imagen........
const [imagen, setImagen] = useState([]);
//documento..........
const [files, setFiles] = useState([]);

//perfil.............
//const [state, setState] = useState([]);
const [Subscription, setSubscription] = useState(datosPerfil);
//..........
const [workExperiences, setWorkExperiences] = useState([]);
//Language............
const [language, setLanguage] = useState([]);
//referencias personales.....................
const [personalReferences, setPersonalReferences] = useState([])
//referencias Laborales......................
const [professionalReferences, setProfessionalReferences] = useState([])
//.......
const [education, setEducation] = useState([]);
const [training, setTraining]=useState([])
//const [error, setError] = useState('');
//.........
const toast = useRef(null);
//puesto solisitado.........
//const [target, setTarget] = useState([]);
//const [target02, setTarget02] = useState([]);
//const [targetPlus, setTargetPlus] = useState([]);
//const [error3, setError3] = useValidation;

//......................................
const [elimExperiencia, setElimExperiencia] = useState([]);
//......................................
const [elimEducation, setElimEducation] = useState([]);
//elimTraining....................................................
const [elimTraining, setElimTraining] = useState([]);
//elimLanguage...................................................
const [elimLanguage, setElimLanguage] = useState([]);
//elimPersonalReferences..................................................
const [elimPersonalReferences, setElimPersonalReferences] = useState([]);
//elimProfessionalReferences...................................................
const [elimProfessionalReferences, setElimProfessionalReferences] = useState([]);



//validarProvincia perfil..........................................................
const [errorProvincia, setErrorProvincia] = useState(null)

//.............................................
const [selectedOption, setSelectedOption] = useState({});
const [error, setError] = useState({});
const [error2, setError2] = useState({});
const [error3, setError3] = useState({});
const [error4, setError4] = useState({});
const [errorS, setErrorS] = useState({});
const router = useRouter();

//cabecera................
const headerSuscriptor=()=>
(
        <div>
            <div><h2>{name}</h2></div>
            <div><h5>{email}</h5></div>
        </div>
);


// ..............................
useEffect(() => {
  async function obtenerDatosExperiencia() {
    try {
      const Experiencia = await GetWorkExperience(id);
      if(Experiencia != undefined){
        //console.log(Experiencia)
      setWorkExperiences(Experiencia)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Experiencia Laboral:', error);
    }
  }

  obtenerDatosExperiencia();
}, []);
//GetEducation(id).........................  
useEffect(() => {
  async function obtenerDatosEducation() {
    try {
      const education = await GetEducation(id);
      if(education != undefined){
        //console.log(Education)
        setEducation(education)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Education:', error);
    }
  }

  obtenerDatosEducation();
}, []); 
//GetTraining(id)................................  
useEffect(() => {
  async function obtenerDatosTraining() {
    try {
      const Training = await GetTraining(id);
      if(Training != undefined){
        //console.log(Training)
        setTraining(Training)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Training:', error);
    }
  }

  obtenerDatosTraining();
}, []); 
//GetLanguage(id)............................................
useEffect(() => {
  async function obtenerDatosLanguage() {
    try {
      const Language = await GetLanguage(id);
      if(Language != undefined){
        //console.log(Language)
        setLanguage(Language)
    }
    } catch (error) {
      console.error('Error al obtener los datos de la Language:', error);
    }
  }

  obtenerDatosLanguage();
}, []); 
//GetPersonalReferences(id).....................................................
useEffect(() => {
  async function obtenerDatosPersonalReferences() {
    try {
      const PersonalReferences = await GetPersonalReferences(id);
      if(PersonalReferences != undefined){
        //console.log(PersonalReferences)
        setPersonalReferences(PersonalReferences)
    }
    } catch (error) {
      console.error('Error al obtener los datos de las Referencias Personales:', error);
    }
  }

  obtenerDatosPersonalReferences();
}, []); 
//GetProfessionalReferences(id)...........................................................
useEffect(() => {
  async function obtenerDatosProfessionalReferences() {
    try {
      const ProfessionalReferences = await GetProfessionalReferences(id);
      if(ProfessionalReferences != undefined){
        //console.log(ProfessionalReferences)
        setProfessionalReferences(ProfessionalReferences)
    }
    } catch (error) {
      console.error('Error al obtener los datos de las Referencias Laborales:', error);
    }
  }

  obtenerDatosProfessionalReferences();
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

const validateArray2 = (arr) => {
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

  setError2(newError); // Actualizar el estado de errores
};
const validateArray3 = (arr) => {
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

  setError3(newError); // Actualizar el estado de errores
};
const validateArray4 = (arr) => {
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

  setError4(newError); // Actualizar el estado de errores
};


const handleSubmit = async(event)=>{
event.preventDefault();

//Subscription.idSubscription=id;


    


    //documento..........
    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('archivo', files[i]);
        formData.append('idSubscription', id);
  
        await Axios.post(`${Url}Document`, formData, {
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
     // console.log(imagen)
     if(imagen.length != 0){
        const formData = new FormData();
        formData.append('imagen', imagen);
        formData.append('idSubscription', id);
  
        await Axios.post(`${Url}Imagen`, formData);
  
        console.log('imagen subido exitosamente');
   
  
      }
    } catch (error) {
      console.error('Error al subir el imagen', error);
    }

    //.........................................
    Subscription.idSubscription=id;
    //...............................
    let WorkExperience =[...workExperiences.concat(education).concat(training).concat(language).concat(personalReferences).concat(professionalReferences),Subscription]
    //console.log(WorkExperience)
    //Validacion.................................
    const algunCampoVacio = WorkExperience.some(objeto => {
      return Object.values(objeto).some(value => value === '');
    });

    if(algunCampoVacio){

            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Campo requerido por llenar', life: 3000 })

            //Validacion Select.........................
            const newError = {};
                      
            for (const name in Subscription) {
              if (!Subscription[name]) {
                newError[name] = 'Por favor, selecciona una opción.';
                setErrorS(newError);
               
              }
            }  

            validateArray(language);
            validateArray2(education)
            validateArray3(training)
            validateArray4(workExperiences)
    }
    else
    {
         //Validacion Select.........................
          const newError = {};
          
          for (const name in Subscription) {
            if (!Subscription[name]) {
              newError[name] = 'Por favor, selecciona una opción.';
              setError(newError);
              toast.current.show({ severity: 'error', summary: 'Error', detail: 'Campo requerido por llenar', life: 3000 })
            return;
            }
          }  

     
     try
     {

    //  let idPerfil=Subscription.id;
      Axios.get(`${Url}Profile/${id}`).then((response)=>{
        if(response.data != undefined)
        {
          Subscription.idSubscription = response.data.idSubscription;
          Subscription.name=response.data.name;
          //idPerfil=response.data.id
        }
        
      }).catch((response)=>{
        console.error('Error al obtener la lista de archivos:', response);
      });
//...................................
 // Agrega un arreglo de dependencias vacío

 //.....................................
      
//......................................


        
          //Puesto Solicitado........................
           //EliminarPuestoSolicitado(id,target02);
           //console.log(target)
          //Puesto Solicitado........................
        //   for (let i = 0; i < target.length; i++) {
        //     pustosSoli.idSubscription=id;
        //     pustosSoli.idJobOpening=target[i].id;
            
        //     PostPuestoSolicitado(pustosSoli)
        //  }

         
          //perfil...................................

          //Subscription.idSubscription=id;
          //console.log(id);
          //console.log(Subscription);
          PutPerfil(Subscription);
          
          //Experiencia Laboral Externa..............
          PutWorkExperience(workExperiences);
          DeleteWorkExperience(elimExperiencia);
          //console.log(elimExperiencia);
          //Education................................
          PutEducation(education);
          DeleteEducation(elimEducation);
          //console.log(elimEducation);
          //Training................................
          PutTraining(training);
          DeleteTraining(elimTraining);
          //Language...................................
          PutLanguage(language);
          DeleteLanguage(elimLanguage);
          //Referencias Personales..........................
          PutPersonalReferences(personalReferences);
          DeletePersonalReferences(elimPersonalReferences);
          //console.log(elimPersonalReferences);
          //Referencias Laborales...........................
          PutProfessionalReferences(professionalReferences);
          DeleteProfessionalReferences(elimProfessionalReferences);
         
        
     


//console.long(elimExperiencia);
        router.push('/FormEnviado');

    }catch (error) {
      console.error('Error al enviar el WorkExperience', error);
    }
  }
    setValidated(true);
  
};
//WorkExperience...................................

const agregarWorkExperience = (event) => {
        event.preventDefault();
        setWorkExperiences((prevWorkExperiences) => [
          ...prevWorkExperiences,
          { 
                idSubscription: Subscription.idSubscription || id,
                startDate :'',
                endDate:'',
                companyName:'',
                position:'',
                salary:'',
                jobArea:'',
                industry:'',
                supervisor:'',
                responsibilitiesAchievements:'',
                phoneNumber :''
          }
        ]);
      };
      
 const eliminarWorkExperience = (event, index) => {
        event.preventDefault();
        setWorkExperiences((prevWorkExperiences) => {
          const nuevosWorkExperiences = [...prevWorkExperiences];
         
          nuevosWorkExperiences.splice(index, 1);
          return nuevosWorkExperiences;
        });
      };

const eliminarExperiencia=(event, index)=>{
  event.preventDefault();
  
  const eliminarExpe = workExperiences[index];

  let eliminarExpo = [...elimExperiencia];

  eliminarExpo.push(eliminarExpe);

  setElimExperiencia(eliminarExpo);
}

const onFormChange = (e, name, index) => {
  let value = ( e && typeof e === 'object') ? (e.target && e.target.value) || '': e || '';

    setWorkExperiences((prevWorkExperiences) => {
      const nuevosWorkExperiences = [...prevWorkExperiences];
      nuevosWorkExperiences[index][name] = value.toString();
      return nuevosWorkExperiences;
    });
    setError4({
      ...error4[index],
      [`${name}`]: null,
    });
  };

//Education.............................................................................
const eliminarEducation = (event,index) => {
    event.preventDefault();
    const nuevosEducation = [...education];
    nuevosEducation.splice(index, 1);
    setEducation(nuevosEducation);
};

const elimiEducation=(event, index)=>{
  event.preventDefault();
  
  const eliminarEdu = education[index];

  let eliminarEd = [...elimEducation];

  eliminarEd.push(eliminarEdu);
  
  setElimEducation(eliminarEd);
}


const onFormEducationChange = (e, name, index) => {
  let value = ( e && typeof e === 'object') ? (e.target && e.target.value) || '': e || '';
    

    setEducation((prevEducation) => {
      const nuevosEducation = [...prevEducation];
      nuevosEducation[index][name] = value.toString();
      return nuevosEducation;
    });
  };

const agregarFormEducation = (event) => {
    event.preventDefault()
    setEducation((prevEducation) =>[...prevEducation, {
      
      idSubscription: Subscription.idSubscription || id,
      academicPreparation:'',
      institution:'',
      fieldStudy:'',
      degreeAwarded:'',
      studyStatus:'',
      issueDate:'',
      startStudy:'',
      endStudy:''
    
    }]);
};

//Training....................
const eliminarTraining = (event,index) => {
    event.preventDefault();
    const nuevosTraining = [...training];
    nuevosTraining.splice(index, 1);
    setTraining(nuevosTraining);
};

const elimiTraining=(event, index)=>{
  event.preventDefault();
  
  const eliminarForma = training[index];

  let eliminarFor = [...elimTraining];

  eliminarFor.push(eliminarForma);
  
  setElimTraining(eliminarFor);
}




const agregarFormTraining = (event) => {
    event.preventDefault()
    setTraining((prevTraining) =>[...prevTraining, {
      
      idSubscription: Subscription.idSubscription || id,
      certificate:'',
      certificateStatus:'',
      startDate:'',
      endDate:'',
      level:''
    
    }]);
};

//Language....................



const eliminarLanguage = (event,index) => {
  event.preventDefault();
  const nuevosLanguage = [...language];
  nuevosLanguage.splice(index, 1);
  setLanguage(nuevosLanguage);
};

const elimiLanguage=(event, index)=>{
  event.preventDefault();
  
  const eliminarLanguage = language[index];

  let eliminaridio = [...elimLanguage];

  eliminaridio.push(eliminarLanguage);
  
  setElimLanguage(eliminaridio);
}

const agregarFormLanguage = (event) => {
  event.preventDefault()
  setLanguage((prevLanguage) =>[...prevLanguage, {
    
    idSubscription: Subscription.idSubscription || id,
    language:'',
    institutionName:'',
    conversationLevel:'',
    readingLevel:'',
    writingLevel:'',
    translationAbility:'',
    level:'' 
  
  }]);
};

//Referencias Personales....................
const eliminarPersonalReferences = (event,index) => {
  event.preventDefault();
  const nuevosPersonalReferences = [...personalReferences];
  nuevosPersonalReferences.splice(index, 1);
  setPersonalReferences(nuevosPersonalReferences);
};

const elimiPersonalReferences=(event, index)=>{
  event.preventDefault();
  
  const eliminarPersonalReferences = personalReferences[index];
  let eliminarRefPer = [...elimPersonalReferences];
  eliminarRefPer.push(eliminarPersonalReferences);
  setElimPersonalReferences(eliminarRefPer);
}

const onFormPersonalReferencesChange = (e, name, index) => {
  let val = (e.target && e.target.value) || '';

  setPersonalReferences((prevPersonalReferences) => {
    const nuevosPersonalReferences = [...prevPersonalReferences];
    nuevosPersonalReferences[index][name] = val.toString();
    return nuevosPersonalReferences;
  });
};
const agregarFormPersonalReferences = (event) => {
  event.preventDefault()
  setPersonalReferences((prevPersonalReferences) =>[...prevPersonalReferences, {
    
    idSubscription: Subscription.idSubscription || id,
    fullName:'',
    landline:'',
    occupation:''
   
  
  }]);
};

//Referencias Laborales....................
const eliminarProfessionalReferences = (event,index) => {
  event.preventDefault();
  const nuevosProfessionalReferences = [...professionalReferences];
  nuevosProfessionalReferences.splice(index, 1);
  setProfessionalReferences(nuevosProfessionalReferences);
};
const elimiProfessionalReferences=(event, index)=>{
  event.preventDefault();
  
  const eliminarProfessionalReferences = professionalReferences[index];
  let eliminarRefLab = [...elimProfessionalReferences];
  eliminarRefLab.push(eliminarProfessionalReferences);
  setElimProfessionalReferences(eliminarRefLab);
}
const onFormProfessionalReferencesChange = (e, name, index) => {

  let val = (e.target && e.target.value) || '';

  setProfessionalReferences((prevProfessionalReferences) => {
    const nuevosProfessionalReferences = [...prevProfessionalReferences];
    nuevosProfessionalReferences[index][name] = val.toString();
    return nuevosProfessionalReferences;
  });
};
const agregarFormProfessionalReferences = (event) => {
  event.preventDefault()
  setProfessionalReferences((prevProfessionalReferences) =>[...prevProfessionalReferences, {
    
    idSubscription: Subscription.idSubscription || id,
    fullName:'',
    landline:'',
    profession:'',
    relationship:''
   
  
  }]);
};

return (
  <Layout pagina='Perfil'>
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

                                           <MostrarImg idSubscription={id}/>
                                           <ImagenPerf setImagen={setImagen} />
                                           

                                      </AccordionTab>

                                      <AccordionTab header="Documentos">

                                           
                                           <MostrarPDF idSubscription={id}/>
                                           <Documentos setFiles={setFiles} />
                                           
      

                                      </AccordionTab>

                                      <AccordionTab header="Información Perfil">

                                           <Profile  Subscription={Subscription} setSubscription={setSubscription} Col={Col} id={id} errorProvincia={errorProvincia} setError={setErrorS} error={errorS}/>
                                            
                                      </AccordionTab>

                                      {/* <AccordionTab header="Puesto Solicitado">





                                          <VacantesForm  target={target} setTarget={setTarget} target02={target02} setTarget02={setTarget02} targetPlus={targetPlus} setTargetPlus={setTargetPlus} id={id}/>






                                      </AccordionTab> */}
                                      <AccordionTab header="Experiencia Laboral">

                                      {workExperiences.map((workExperience,index) => (
                                       
                                           <WorkExperience key={index} WorkExperience={workExperience} setWorkExperiences={setWorkExperiences} onFormChange={onFormChange} eliminarWorkExperience={eliminarWorkExperience} eliminarExperiencia={eliminarExperiencia} error={error4}  index={index} Col={Col}/>
                                          
                                            ))}
                                      <div>
                                      <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarWorkExperience}><FontAwesomeIcon icon={faPlus} /></a>
                                      </div>
                                      </AccordionTab>
                                      <AccordionTab header="Educación">
                                      <div>
                                                { education.map((education, index) => (
                                                    <Education key={index} Education={education} setEducation={setEducation} error2={error2} setError2={setError2} error={error} setError={setError}  onFormEducationChange={onFormEducationChange} eliminarEducation={eliminarEducation} elimiEducation={elimiEducation} index={index} Col={Col}/>
                                          
                                                    
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormEducation}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                            </div>
                                      </AccordionTab>
                                      <AccordionTab header="Formación Complementaria">
                                          
                                             <div>
                                                { training.map((training, index) => (
                                                    
                                                    <Training key={index} Training={training} setTraining={setTraining}  eliminarTraining={eliminarTraining} elimiTraining={elimiTraining} index={index} Col={Col} error3={error3} setError3={setError3}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormTraining}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                            </div>
                                      </AccordionTab>
                                      <AccordionTab header="Languages">
                                          <div>
                                                { language.map((languages, index) => (
                                                    
                                                    <Languages key={index} Languages={languages} elimLanguage={elimLanguage}  elimiLanguage={elimiLanguage} eliminarLanguage={eliminarLanguage} index={index} Col={Col} error={error} setError={setError} setLanguage={setLanguage}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormLanguage}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                          </div>
                                      </AccordionTab>

                                      <AccordionTab header="Referencias personales">
                                          <div>
                                                { personalReferences.map((personalReferences, index) => (
                                                    
                                                    <PersonalReferences key={index} PersonalReferences={personalReferences} onFormPersonalReferencesChange={onFormPersonalReferencesChange}  eliminarPersonalReferences={eliminarPersonalReferences} elimiPersonalReferences={elimiPersonalReferences} setPersonalReferences={setPersonalReferences} index={index} Col={Col}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormPersonalReferences}><FontAwesomeIcon icon={faPlus} /></a>
                                                    </div>


                                          </div>
                                      </AccordionTab>

                                      <AccordionTab header="Referencias Laborales">
                                          <div>
                                                { professionalReferences.map((professionalReferences, index) => (
                                                    
                                                    <ProfessionalReferences key={index} ProfessionalReferences={professionalReferences} onFormProfessionalReferencesChange={onFormProfessionalReferencesChange}  eliminarProfessionalReferences={eliminarProfessionalReferences} elimiProfessionalReferences={elimiProfessionalReferences} setProfessionalReferences={setProfessionalReferences} index={index} Col={Col}/>
                                          
                                                      
                                                    ))}
                                                    <div>
                                                        <a href="#"  className="btn btn-primary rounded-circle" onClick={agregarFormProfessionalReferences}><FontAwesomeIcon icon={faPlus} /></a>
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
   
  const url = `${Url}Subscription/${index}`;
 

  const res = await fetch(url)
  const data = await res.json()

  
  return{
    props:{
          data
    }
  }

}

export default Formulario;