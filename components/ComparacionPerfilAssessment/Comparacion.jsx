import React,{useState,useEffect,useRef} from 'react'
import {Url} from '../../components/Url/URL';
import axios from 'axios';

 const Comparacion = ({ProfileAssessment,language,Knowledge,subscription,setAplicar})=>{
  const [languageSubscription, setLanguageSubscription] = useState([]);
  const [Education, setEducation] = useState([]);
  const [WorkExperience, setWorkExperience] = useState([]);
  const [Training, setTraining] = useState([]);

//..............................................................

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get(`${Url}Language/${subscription.idSubscription}`);
        console.log(response.data)
        const data = response.data[0]
        
        setLanguageSubscription(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
  
    obtener();
  }, []);
//..............................................................

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get(`${Url}Education/${subscription.idSubscription}`);
        console.log(response.data)
        const data = response.data
        
        setEducation(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    obtener();
  }, []);
//.............................................................

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get(`${Url}WorkExperience/${subscription.idSubscription}`);
        console.log(response.data)
        const data = response.data
        
        setWorkExperience(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    obtener();
  }, []);

  //.............................................................

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get(`${Url}Training/${subscription.idSubscription}`);
        console.log(response.data)
        const data = response.data
        
        setTraining(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    obtener();
  }, []);
  //.............................................................

  function convertirFechaStringADate(fechaString) {
    const partes = fechaString.split('/');
    return new Date(partes[2], partes[1] - 1, partes[0]);
  }
//................................................................

  function calcularDiferenciaEnAnios(fechaInicial, fechaFinal) {

   
    const fechaInicio = new Date(fechaInicial);
    const fechaFin = new Date(fechaFinal);
   
    const diferenciaEnMilisegundos = fechaFin - fechaInicio;
    const milisegundosPorAnio = 3.154e+10;
    const diferenciaEnAnios = Math.floor(diferenciaEnMilisegundos / milisegundosPorAnio);
    return diferenciaEnAnios;
  }
  
const fechaNacimientoString = subscription.birthDate;
const fechaNacimiento = convertirFechaStringADate(fechaNacimientoString);
const fechaActual = new Date();
const EdadSubscription = calcularDiferenciaEnAnios(fechaNacimiento, fechaActual);

  //.........................................................
  function asignarNivelExperiencia(aniosExperiencia) {
    if (aniosExperiencia === 0) {
      return 1;
    } else if (aniosExperiencia >= 1 && aniosExperiencia < 3) {
      return 2;
    } else if (aniosExperiencia >= 3 && aniosExperiencia <= 5) {
      return 3;
    } else if (aniosExperiencia > 5) {
      return 4;
    } else {
      // Manejar otros casos o errores, si es necesario
      return 1; // O cualquier otro valor predeterminado
    }
  }
  //.........................................................
  
  //........................................................
  const Conditional = (value1,value2) => {
    const isConditional= Number(value1) >= Number(value2);
    return isConditional;
  }
  //........................................................
    const comparacionDatos =()=>{
    let Data={
      sex:'',
      edad:'',
      education:'',
      workExperience:'',
      Lenguage:[],
      Knowledge:[]

    };
    let shouldContinueEducation = true;
    let shouldContinueWorkExperience = true;
    let shouldContinuelanguage = true;
    let respuestasIncorrectas = 0;
    

    if(ProfileAssessment.sex == subscription.sex){
    }else{
      
      Data.sex = ProfileAssessment.sex;
      respuestasIncorrectas++
    }

    if(Conditional(EdadSubscription, ProfileAssessment.edad)){
    }else{
      
      Data.edad = ProfileAssessment.edad;
      respuestasIncorrectas++
    }
    //.............................................................
    if(Education !== undefined){
      Education.forEach(respuesta => {
        if(shouldContinueEducation && Conditional(respuesta.academicPreparation, ProfileAssessment.education)){

          shouldContinueEducation = false;
        }
      });
    }
    //.............................................................
    if(WorkExperience !== undefined){
     WorkExperience.forEach(respuesta => {
      const endDate = convertirFechaStringADate(respuesta.endDate);
      const TimeWorkExperience = calcularDiferenciaEnAnios(respuesta.startDate, endDate);
      const TheWorkExperience = asignarNivelExperiencia(TimeWorkExperience)
    

      if(shouldContinueWorkExperience && Conditional(TheWorkExperience, ProfileAssessment.workExperience)){
        shouldContinueWorkExperience = false;

      }
     });
    }
    //............................................................
    if(language!==undefined){
      language.forEach(res => {
        if(languageSubscription !== undefined){
          languageSubscription.forEach(respuesta => {
          if(respuesta.language === res.language && Conditional(respuesta.level, res.answerLan)){
    
          
          }else{
           
            const data=Data.Lenguage
            data.push({
              language: res.language,
              answerLan: res.answerLan
            });
          
            respuestasIncorrectas++
          }
          });
        }else{
          const data=Data.Lenguage
          data.push({
            language: res.language,
            answerLan: res.answerLan
          });
        
          respuestasIncorrectas++
        }
    });
    }
 
    //............................................................
    if(Knowledge!==undefined){
      Knowledge.forEach(res => {
        if(Training !== undefined){
          Training.forEach(respuesta => {
          if(respuesta.certificate === res.knowledge && Conditional(respuesta.level, res.answerKnow)){
    
            
          }else{
           
            const data=Data.Knowledge
            data.push({
              Knowledge: res.knowledge,
              answerKnow: res.answerKnow
            });
          
            respuestasIncorrectas++
          }
          });
        }else{
          const data=Data.Knowledge
          data.push({
            Knowledge: res.knowledge,
            answerKnow: res.answerKnow
          });
        
          respuestasIncorrectas++
        }
    });
    }
    //...........................................................
     if(shouldContinueEducation==true){
      const education=ProfileAssessment.education
      Data={...Data,education}
      respuestasIncorrectas++
     }
     if(shouldContinueWorkExperience==true){
      const workExperience=ProfileAssessment.workExperience
      Data={...Data,workExperience}
      respuestasIncorrectas++
     }
        //.....................................................

        return respuestasIncorrectas == 0 ? respuestasIncorrectas: Data
   }
  
//............................................................
   const noAplica=()=>{
    setAplicar(false)
   }
//.............................................................
    const getNivelEducation=(numero)=>{
      switch (Number(numero)) {
        case 1:
          return 'Estudiante';
        case 2:
          return 'Técnico';
        case 3:
          return 'Licenciatura';
        case 4:
          return 'Postgrado';
        case 5:
          return 'Maestría';
        default:
          return 'Desconocido';
      }
    
    }
    //.....................................................................
    const getNivelWorkExperience = (numero)=>{
      switch (Number(numero)) {
        case 1:
          return 'No requerida';
        case 2:
          return '1-2 Años';
        case 3:
          return '3-5 Años';
        case 4:
          return 'Más de 5 años';
        default:
          return 'Desconocido';
      }
    
    }
    //...................................................................
    const getNivel=(numero)=>{

      switch (Number(numero)) {
        case 1:
          return 'Nada';
        case 2:
          return 'Básico';
        case 3:
          return 'Intermedio';
        case 4:
          return 'Avanzado';
       
        default:
          return 'Desconocido';
      }
    
    }
    //...................................................................
  const resultado = comparacionDatos();
  const Leguage = resultado.Lenguage;
  const Know = resultado.Knowledge;
  
    return(
      <>
      <style>
        {`.circle-text {
        border: 2px solid blue;
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0;
        }`}
      </style>

          {resultado == 0 && (
            <div className='text-center'>
                <h3>¿Estás seguro de aplicar en esta vacante?</h3>
            </div>
          )}

          {resultado !== 0 && ( 
            
            <div className='text-center' style={{ fontSize: '1.2em' }}>
              {noAplica()}
              <h1 style={{ fontSize: '1.5em' }}>NO PUEDES APLICAR A ESTA VACANTE</h1>
              <hr/>
              {resultado.edad !== '' ? (
                <div style={{ fontSize: '1.1em' }} className='circle-text'>Se requiere una Edad igual o mayor a: <strong>{resultado.edad}</strong> años.</div>
              ) : (<div></div>)}
              {resultado.sex !== '' ? (
                <div style={{ fontSize: '1.1em' }} className='circle-text'>Se requiere que el sexo sea: <strong>{resultado.sex}</strong>.</div>
              ) : (<div></div>)}
              {resultado.education !== '' ? (
                <div style={{ fontSize: '1.1em' }} className='circle-text'>Se requiere: <strong>{getNivelEducation(resultado.education)}</strong>.</div>
              ) : (<div></div>)}
              {resultado.workExperience !== '' ? (
                <div style={{ fontSize: '1.1em' }} className='circle-text'>Se requiere una Experiencia Laboral de: <strong>{getNivelWorkExperience(resultado.workExperience)}</strong>.</div>
              ) : (<div></div>)}
              {Leguage !== undefined ? (
                <div style={{ fontSize: '1.1em' }}>
                  {Leguage.map((e, index) => (
                    <div key={index} className='circle-text'>
                      Se requiere un <strong>{e.language}</strong> de nivel <strong>{getNivel(e.answerLan)}</strong>.
                    </div>
                  ))}
                </div>
              ) : (<div></div>)}
              {Know !== undefined ? (
                <div style={{ fontSize: '1.1em' }}>
                  {Know.map((e, index) => (
                    <div key={index} className='circle-text'>
                      Se requiere un de nivel <strong>{getNivel(e.answerKnow)}</strong> de <strong>{e.Knowledge}</strong>.
                    </div>
                  ))}
                </div>
              ) : (<div></div>)}
              <hr/>
            </div>
          )}
      
      </>
    )
  


    
}
export default Comparacion