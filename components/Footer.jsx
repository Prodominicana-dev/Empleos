import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'




const Footer = () => {
  return (
    <footer>




                        <div
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
                            </div>
                        </div>
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