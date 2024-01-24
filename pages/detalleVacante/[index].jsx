import React,{useState,useEffect,useRef} from 'react'
import Layout from '../../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import style from '../../styles/detalleVacante.module.css'

import {Url} from '../../components/Url/URL';

//............................................................
import {PostPutPositionAppliedFor} from '../../components/PostPut/PostPerfil'
import {PostPutAssessment} from '../../components/PostPut/PostPerfil'
import {PostPutLanguage} from '../../components/PostPut/PostPerfil'
import {PostPutKnowledge} from '../../components/PostPut/PostPerfil'
import {DeleteKnowledge} from '../../components/PostPut/PostPerfil'
import {PostPutProfileParticulars} from '../../components/PostPut/PostPerfil'
import {DeleteProfileParticulars} from '../../components/PostPut/PostPerfil'
//.............................................................
// import {validateLanguage} from '../../components/validationAssessment/validationAssessment'
import DialogProfile from '../../components/dialog/Dialog'
import DialogRegistro from '../../components/dialog/DialogRegistro'
import DialogAplico from '../../components/dialog/DialogAplico'
//.............................................................
import ProfileParticulars from '../../components/componetAssessment/ProfileParticulars'
import KnowledgeAssessment from '../../components/componetAssessment/Knowledge'
import PerfilAssessment from '../../components/componetAssessment/perfilAssessment'
import LanguageAssesment from '../../components/componetAssessment/languageAssessment/languageAssessment';
//........................
import { useRouter } from 'next/router';

//......................................
import  Comparacion  from '../../components/ComparacionPerfilAssessment/Comparacion';
//......................................


 


const detalleVacante = (data) => {

  let datosAssessment={

    idJobOpening:0,
    idSubscription:0,
    sex:'',
    edad:'',
    workExperience:'',
    education:'',
    sexAssessment:'',
    edadAssessment:'',
    workExperienceAssessment:'',
    educationAssessment:'',
    status:'None'
    }

let PositionAppliedFor={
  idJobOpening:0,
  idSubscription:0,
  status:''
}
//...................................
const [Assessment,setAssessment]=useState(datosAssessment);
const [errorAss, setErrorAss] = useState({});
const [language, setLanguage] = useState([]);
const [languageAnswer, setLanguageAnswer] = useState([]);
const [Knowledge, setKnowledge] = useState([]);
const [KnowledgeAnswer, setKnowledgeAnswer] = useState([]);
const [positionAppliedFor, setPositionAppliedFor] = useState(PositionAppliedFor);
const [profileParticularsAnswer, setProfileParticularsAnswer] = useState([]);
const [value,setValue]=useState(false);
const [dialogRegistro,setDialogRegistro]=useState(false);
const [dialogAplico,setDialogAplico]=useState(false);

const [ProfileAssessment,setProfileAssessment]=useState([]);


const [subscription,setSubscription] = useState([])
//...................................
const toast = useRef(null);
const router = useRouter();

const [dialog01, setDialog01] = useState(false);
const [aplicar, setAplicar] = useState(true);


  const [user, setUser] = useState({
    Id:'',email:'',username:''
 })


  const {
    id,
    name,
    responsibilities,
    profile,
    status} = data.data;

  

  useEffect(() => {

    axios.get('/api/profile').then((response)=>{
        setUser(response.data)  
  });
  }, []); 





 
//................................................
const actializarPage = () =>{
setAssessment(Assessment);
setLanguageAnswer(languageAnswer);
setKnowledgeAnswer(KnowledgeAnswer);
setProfileParticularsAnswer(profileParticularsAnswer);
}


//................................................
const handleSubmit = async(event)=>{
event.preventDefault();
//.............................................

PositionAppliedFor.idJobOpening=id;
PositionAppliedFor.idSubscription=Number(user.Id)
//........................................

    PostPutPositionAppliedFor(PositionAppliedFor)
    actializarPage();

    hideDialog();

   
    router.push(`detalleVacante${id}`);

}

//..................................................
useEffect(() => {
  const obtener = async () => {
    try {
      const response = await axios.get(`${Url}ProfileAssessment/${id}`);
      console.log(response.data)
      const data = response.data[0]
      
      setProfileAssessment(data);
    } catch (error) {
      console.error('Error al obtener Assessment:', error);
    }
  };
  obtener();
}, []);
//Language....................
    useEffect(() => {
    const obtenerlanguage = async () => {
    try {
      const response = await axios.get(`${Url}LanguageAssessment/${id}`);
      const {data}=response;
     
      console.log(data)
      setLanguage(data);
     
    } catch (error) {
      console.error('Error al obtener Language Assessment:', error);
    }
    };

    obtenerlanguage();
    }, []);
//...............................................
//Knowledge....................
useEffect(() => {
const obtenerKnowledge = async () => {
try {
  const response = await axios.get(`${Url}KnowledgeAssessment/${id}`);
  console.log(response.data)
  setKnowledge(response.data);
} catch (error) {
  console.error('Error al obtener Knowledge Assessment:', error);
}
};

obtenerKnowledge();
}, []);
//...............................................
useEffect(() => {
  const obtener = async () => {
    try {
  
      const response = await axios.get(`${Url}Profile/${user.Id}`);
      
      setSubscription(response.data[0]);
    } catch (error) {
      console.error('Error al obtener Profile', error);
    }
  };
  
  obtener();
  }, []);
  //...............................................
  useEffect(() => {
    const obtenerProfileAnswer = async () => {
      try {
        
        const DataId = {
          idSubscription:subscription.idSubscription,
          idJobOpening: id
        };
  
        const response = await axios.post(`${Url}PositionAppliedForByIdJobOpeningAndIdSubscription`, DataId);

        const data= response.data; 
        const ultimoElemento = data[data.length - 1];

        console.log('Ultimo elemento ',ultimoElemento);
        if(ultimoElemento!=undefined){
              setPositionAppliedFor(ultimoElemento);
        }
      } catch (error) {
        console.error('Error al obtener PositionAppliedFor:', error);
      }
    };
    
    obtenerProfileAnswer();
  }, []);
//...............................................
const DialogProfileOpen=()=>{
  setValue(true);
}

const DialogRegistroOpen=()=>{
  setDialogRegistro(true);
}
const DialogAplicoOpen=()=>{
  setDialogAplico(true);
}

//...............................................
const DialogOpen=()=>{


console.log('dialog',subscription)

  return(

      <div>
          <div className="d-flex justify-content-end " style={{textDecoration:'none'}}>
            
            <Button className="mt-5 w-full p-3 text-xl" label="APLICAR" rounded text raised style={{height:'40px',width:'90px',fontSize:'19px'}} 
             onClick={user.Id === undefined ? DialogRegistroOpen :
                (subscription === undefined ? DialogProfileOpen :
                positionAppliedFor.status ==='None' ?  DialogAplicoOpen:  openDialog)
            }
            ></Button>
          </div>
      </div>

  )
}


//Dialog.......................................................
const hideDialog=()=>{
  setDialog01(false);
 
}
const openDialog=()=>{
 

  setDialog01(true)
}
const DialogFooter=()=>{

  return(
        
      <div>
          <div className="d-flex justify-content-end ">

            {aplicar && (
            <Button className="mt-5 " label="Aceptar"  text raised style={{height:'40px',width:'90px',fontSize:'19px'}} 
             onClick={handleSubmit}
            ></Button>)}

             <Button className="mt-5 bg-red-400 text-white" label="Cancelar"  text raised style={{height:'40px',width:'90px',fontSize:'19px'}} 
             onClick={hideDialog}
            ></Button>
          </div>
      </div>

  )
}


const dialog = () => {
  return (
    <div className=''>
      <Toast ref={toast} />
      <Dialog
        visible={dialog01}
        style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}
        modal
        className="p-fluid"
        footer={DialogFooter}
        onHide={hideDialog}
      >
    
        <Comparacion ProfileAssessment={ProfileAssessment} language={language} Knowledge={Knowledge} subscription={subscription} setAplicar={setAplicar} />
     
      </Dialog>
    </div>
  );
}
//.......................................................




const DetalleVacante = () => {
  return (
    <>
      <div className={style.space02}></div>
      <div className='flex items-center justify-center min-w-screen overflow-hidden mt-9 mb-8'>
        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
              <div className={`align-items-center justify-content-center mt-8 ${style.responsiveContainer}`}>
                <div style={{ borderRadius: '16px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 100%, rgba(33, 150, 243, 0) 100%)' }}>
                  <div className="w-full surface-card py-8 sm:px-8" style={{ borderRadius: '16px' }}>
                  <div className="">
                      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  icon="pi pi-arrow-left"
                            onClick={handleGoBack}
                      >
                       
                      </Button>
                  </div>
                    <div className="text-center mb-5">

                      <span className="block text-1000 text-xl mb-2"><h3>{name}</h3></span>
                    </div>
                    <hr />
                    <div>
                      <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                        Perfil del Puesto:
                      </label>
                      <div className={style.textCo}>{profile}</div>

                      <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                        Responsabilidades:
                      </label>
                      <div className={style.textCo}>{responsibilities}</div>

                      {/* <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                        Condición:
                      </label>
                      <div className={style.habilitado}><div className='text-center'>{status}</div></div> */}
                      <hr />

                      <div className='mt-5'>
                        {DialogOpen()}
                        <DialogProfile value={value} setValue={setValue} id={user.Id} />
                        <DialogRegistro dialogRegistro={dialogRegistro} setDialogRegistro={setDialogRegistro} />
                        <DialogAplico dialogAplico={dialogAplico} setDialogAplico={setDialogAplico}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
      </div>
      <div className={style.space}></div>
    </>
  );
};


const handleGoBack = () => {
  window.history.back();
};

  return (
    <Layout pagina={name}>
     
       {DetalleVacante()}
       {dialog()}
       <div style={{height:"20em"}}></div>
    </Layout>
  )
}

export async function getServerSideProps({query:{index}}){
   
    const url = `${Url}JobOpening/${index}`;
   
  
    const res = await fetch(url)
    const data = await res.json()
  
      return{
        props:{
          data
        }
      }
    
    }

export default detalleVacante