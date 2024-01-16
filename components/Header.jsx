import Link from 'next/link'
import styles from '../styles/Header.module.css'
import React, { useContext, useRef,useEffect, useState } from 'react';
//estilo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'primereact/button';
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
        <>
        
            <div className='col-lg-12 ml-4'>
                <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Quiénes Somos</Link>
                        {mostrarAlgo &&  <a href="#categorias">Categorías</a> }

                </nav>
            </div>
            {/* <div className='col-lg-12' style={{height:"10%"}}>
            
            </div> */}
        </>
       )
 
 }


 const sesion = () => {

    return(
        <div>
              
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                <Link href={user.Id != null ? (`/formulario/${user.Id}`):(`login`)}>
                    <Button label={user.Id != null ? (`Ver Perfil`):(`INICIAR SESIÓN`)} text rounded className={user.Id != null ? (`border-none  font-light line-height-2 bg-blue-500 text-white`):(`ml-6 line-height-2 text-black`)}></Button>
                </Link>
                <Link href={user.Id != null ? (`/`):(`/registro`)}>
                    <Button label={user.Id != null ? (`Cerrar Sesión`):(`REGÍSTRATE`)} text rounded className={user.Id != null ? (`border-none ml-5 font-light line-height-2 bg-red-500 text-white`):(`border-none ml-5 line-height-2 bg-blue-500 text-white`)} onClick={user.Id != null ? (logout):(null)}></Button>
                </Link>
            </div>
               
        </div>

    )
    
 }





  

  return (
    <header 
    // className={styles.header
    >



 




        {/* ----------------------------------------------------------------------------------------------------------------- */}
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden col-lg-11 row">
                <div className="py-5 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static"
            //     style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #003DA5 20%,  #D0E9F9 1000%)'
            //     // , clipPath: 'ellipse(200% 200% at 93% 13%)' 
            // }}
                >
                    <Link href="/" style={{textDecoration:'none'}} className="flex align-items-center ">
                        <img src={`https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png`} alt="Prodominicana Logo" height="50" className="mr-0 lg:mr-2" />
                        <span className="text-700 font-medium text-2xl line-height-3 mr-8 text-black;">PRODOMINICANA <br/> EMPLEOS</span>
                    </Link>

                    
                
                    {sesion()}
                    
                </div>
                        
                     
                
                    <div>

                        {Formulario()}
                        <hr style={{height:"4%",background:"#003DA5"}}/>

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