import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout';
import axios from 'axios';
import Link from 'next/link';

import { Button } from 'primereact/button';

import style from '../../styles/detalleVacante.module.css'

import {Url} from '../../components/Url/URL';


const detalleVacante = (data) => {
  const [user, setUser] = useState({
    Id:'',email:'',username:''
 })


  const {
    Id,
    NombreVacante,
    Responsabilidades,
    PerfilPuesto,
    Condicion}=data.data;

  const [login, setLogin] = useState(false)

  useEffect(() => {

    axios.get('/api/profile').then((response)=>{
        setUser(response.data)  
});
}, []); 

const logueado=(session)=>{
  if(user.Id != null){
      return(
          <>
            <Link style={{textDecoration:'none'}} href={`/formulario/${user.Id}`}>
                  <Button label="Aplicar" className="w-full p-3 text-xl" 
                                      //onClick={login}
                  ></Button>
            </Link>
          </>
      )
}else{
      return(
          <>
          <Link style={{textDecoration:'none'}} href={`/login`}>
            <Button label="Iniciar sesión" className="w-full p-3 text-xl" 
                                      //onClick={login}
            ></Button>
          </Link>
          </>
        )
}

}



const DetalleVacante=()=>{
    return(
      <>
      <div className={style.space02}></div>
      <div className=' flex align-items-center justify-content-center  min-w-screen overflow-hidden mt-9 mb-8'>
        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                 


                <div className="align-items-center justify-content-center mt-8">
                    {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" /> */}
                    {/* <img src={`https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" /> */}
                    <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 100%, rgba(33, 150, 243, 0) 100%)' }}>
                        <div className="w-full surface-card py-8  sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">
                                {/* <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" />
                                <div className="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div> */}
                                <span className="block text-1000 text-xl mb-2"><h3>{NombreVacante}</h3></span>
                            </div>
                             <hr/>
                            <div>

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Perfil del Puesto:
                                </label>
                                <div className={style.textCo}>{PerfilPuesto}</div>
                                
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                 Responsabilidades:
                                </label>
                                <div className={style.textCo}>{Responsabilidades}</div>
                               
                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Condición:
                                </label>
                                <div className={style.habilitado}><div className='text-center'>{Condicion}</div></div>
                                <hr/>

                                <div className='mt-5'>
                                {logueado(login)}
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
        <div className={style.space}></div>
      </>
    )
}



  return (
    <Layout pagina={NombreVacante}>
       {DetalleVacante()}
    </Layout>
  )
}

export async function getServerSideProps({query:{index}}){
   
    const url = `${Url}Vacantes01/${index}`;
   
  
    const res = await fetch(url)
    const data = await res.json()
  
      return{
        props:{
          data
        }
      }
    
    }

export default detalleVacante