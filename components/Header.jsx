import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

import React, { useContext, useRef,useEffect, useState } from 'react';
//estilo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//estilo primereact
import { StyleClass } from 'primereact/styleclass';
import { classNames } from 'primereact/utils';
//import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';
//import Form from '../pages/Form';

//......
import axios from 'axios';
import { useRouter } from 'next/router';


const Header = () => {

  const [isHidden, setIsHidden] = useState(false);
  const [formulario, setFormulario] = useState(false)
  const [user, setUser] = useState({
     Id:'',email:'',username:''
  })
  const menuRef = useRef();

  const router = useRouter();

  

 useEffect(() => {

    axios.get('/api/profile').then((response)=>{
        setUser(response.data)  
});
}, []);
  
const logout= async()=>{
  const response = await axios.post('/api/auth/logout')
 
    router.push('/login');
  
}
 


 const Formulario = () => {
    const mostrarAlgo = router.pathname === '/';

   
       return(
        <nav className={styles.navegacion}>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        {mostrarAlgo &&  <a href="#categorias">Categorías</a> }

        </nav>
       )
 
 }


 const sesion = () => {
  

    if(user.Id != null){
       return(
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
        <Link href={`/formulario/${user.Id}`} >
            <Button label="Ver Perfil" text rounded className="border-none  font-light line-height-2 bg-blue-500 text-white"></Button>
        </Link>
        <Link href="/" >
            <Button label="Cerrar Sesión" text rounded className="border-none ml-5 font-light line-height-2 bg-red-500 text-white" onClick={()=>logout()}></Button>
        </Link>
        </div>
       )
    }else{
        return(
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Link href="/login" className="border-none font-light line-height-2 text-blue-500">
                <Button label="Login" text rounded ></Button>
            </Link>
            <Link href="/registro" >
                <Button label="Registrate" rounded className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white"></Button>
            </Link>
            {/* <Button label="prueba" rounded className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white" onClick={getProfile}></Button> */}
            </div>
        )
    }
 }

  return (
    <header 
    // className={styles.header
    >
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden col-lg-11 row">
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/" style={{textDecoration:'none'}} className="flex align-items-center ">
                        <img src={`https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png`} alt="Prodominicana Logo" height="50" className="mr-0 lg:mr-2" />
                        <span className="text-700 font-medium text-2xl line-height-3 mr-8 ;">PRODOMINICANA EMPLEOS</span>
                    </Link>
                    <StyleClass nodeRef={menuRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick="true">
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }} >
                    
                    {Formulario()}

                    {/* componente a parte */}
                        {sesion()}


                    </div>
                </div>
            </div>
        </div>

        {/* <div className="contenedor">
           <div className={styles.barra}>
           <Link href="/">
                 <Image width={100} height={100} src="/img/logo.avif" alt="Imagen logo" />
            </Link>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Admin</Link>
    
            </nav>
           </div>
        </div> */}
    </header>
  )
}

export default Header