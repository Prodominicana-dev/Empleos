import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    
    <Layout pagina='Nosotros'>
       
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>

                <Image layout="responsive" width={600} height={410} src="/img/nosotros.jpg" 
                alt="Imagen sobre nosotros"/>

                <div>
                    <h5>Somos el Centro de Exportación e Inversión de la República Dominicana (ProDominicana). Tenemos el objetivo contribuir al incremento de las exportaciones y las inversiones en favor de nuestra economía. Brindamos servicios integrales a todos los inversionistas, exportadores y compradores, de forma gratuita.</h5>
                     

                </div>
            </div>

        </main>

    </Layout>
        
    )
}

export default Nosotros

