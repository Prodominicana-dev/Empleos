import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import { parseISO, format } from 'date-fns';




const Footer = () => {
const year= new Date()


  return (
    <footer>

<footer className="footer-section spad" style={{background: "#003DA5", paddingBottom: "10px"}}>
    <div className="container">
        <div className="row">
            <div className="row" style={{width:"100%"}}>
                <div 
                 className={`flex flex-column justify-content-center align-items-center  mt-6 text-center px-3 py-1 md:py-0 ${styles.imagenInstitucional }`} >
                
                <img src={`https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png`} alt="Prodominicana Logo" className="mb-1 w-5rem flex-shrink-0"  />
                    {/* <img src="~/Imagenes/PD-Logo-RGB-CEI Icon.png" width="75" height="75"> */}
                </div>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-12">
                <h4 style={{color:"#fff"}}>ProDominicana</h4>
                <h4 style={{color: "#fff"}}>Centro de Exportación e Inversión de la República Dominicana</h4>
                <p style={{color: "#fff", marginBottom: "0px"}}>
                    Av. 27 de Febrero esq. Av. Gregorio Luperón, frente a la Plaza de la Bandera,
                    Santo Domingo, República Dominicana
                </p>
            </div>
        </div>
        <div className="text-center" style={{padding: "5px"}}>
            <h5 style={{color: "#fff"}}>Tel: 809-530-5505</h5>
        </div>
        {/* <div className="infoFooter" style={{marginTop:"0px"}}>
            <div>
                <h5 className="text-center" style={{color: "#fff", margin: "0px"}}><a style={{color: "#fff"}} href="mailto:servicios@Prodominicana.gob.do">servicios@Prodominicana.gob.do</a></h5>
            </div>
        </div> */}
        <div className="text-center" style={{marginBottom:"0px"}}>
            {/* <small ><a style={{color: "#fff"}} href="~/TerminosReferncia">Términos de uso</a> | <a style={{color: "#fff"}} href="~/PoliticaPrivacidad">Políticas de privacidad</a> | <a style={{color: "#fff"}} href="~/PreguntasFrecuentes">Preguntas frecuentes</a></small> */}
            <small style={{color: "#fff"}}>Prodominicana © {format(year,'yyyy')} Todos los derechos resevados</small>
        </div>
        <div className="row mb-6" 
        // style={{padding: "10px"}}
        ></div>
    </div>
    {/* <div style={{display: "flex", justifyContent: "right", marginRight: "1rem"}}>

        <div style={{right: "3%", marginTop: "-5%"}}>
            <div className="norticlink" style={{zIndex: "10" }}>
                <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/666" height="100" width="100" frameborder="0" scrolling="no"></iframe>
                <a className="norticlink" title=" Norma para la Gestión de las Redes Sociales en los Organismos Gubernamentales" style={{zIndex: "9", position: "absolute"}} target="_blank" href="https://nortic.ogtic.gob.do/instituciones/PRODOMINICANA"></a>
            </div>
        </div>

        <div style={{right: "3%", marginTop: "-5%"}}>
            <div className="norticlink" style={{zIndex: "10"}}>
                <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/638" height="100" width="100" frameborder="0" scrolling="no"></iframe>
                <a className="norticlink" title="Norma para el desarrollo y gestión de los portales web y la transparencia de los organismos del Estado Dominicano" style={{zIndex: "9", position: "absolute"}} target="_blank" href="https://nortic.ogtic.gob.do/instituciones/PRODOMINICANA"></a>
            </div>
        </div>

        <div style={{right: "3%", marginTop: "-5%"}}>
            <div className="norticlink" style={{zIndex: "10"}}>
                <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/252" height="100" width="100" frameborder="0" scrolling="no"></iframe>
                <a className="norticlink" title="Norma sobre Publicación de Datos Abiertos del Gobierno Dominicano" style={{zIndex: "9", position: "absolute"}} target="_blank" href="https://nortic.ogtic.gob.do/instituciones/PRODOMINICANA"></a>
            </div>
        </div>
    </div> */}
    
   
    
</footer>

{/* //---------------------------------------------------------------------------------------------------------------- */}
                        {/* <div
                            className="col-12 mt-2 mb-0 p-2 md:p-8"
                            style={{ borderRadius: '20px', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)' }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center  mt-4 text-center px-3 py-3 md:py-0">
                            <img src={`https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                                <h3 className="text-gray-900 mb-2">ProDominicana</h3>
                                <h3 className="text-gray-600 text-2xl">Centro de Exportación e Inversión de la República Dominicana</h3>
                                <p className="text-gray-900 sm:line-height-2 md:line-height-4  mt-2" style={{ maxWidth: '800px' }}>
                                Av. 27 de Febrero esq. Av. Gregorio Luperón, frente a la Plaza de la Bandera, Santo Domingo, República Dominicana
                                </p>
                                <h4 className="text-gray-900 mb-2">Tel: 809-530-5505</h4>
                                {/* <h4 className="text-gray-900 mb-2">servicios@Prodominicana.gob.do</h4>
                                <h3 className="text-gray-900 mb-2">ProDominicana</h3>
                                <h3 className="text-gray-900 mb-2">ProDominicana</h3> */}
                                {/* <img src="/demo/images/landing/peak-logo.svg" className="mt-4" alt="Company logo" /> */}
                            {/* </div> */}
                        {/* </div> */}
        {/* <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Admin</Link>
                
            </nav>

            <p className={styles.copyright}>Todos los derechos reservados</p>
        </div> */} 
    </footer>
  ) 
}

export default Footer