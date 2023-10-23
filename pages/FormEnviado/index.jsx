import React from 'react'
import Layout from '../../components/Layout'
const FormEnviado = () => {
  return (
    <Layout pagina='Inicio'>
       
    {/* <h1 className="heading">Desde Inicio</h1> */}
     <div>
           <div
                   id="hero"
                   className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                   style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%,  #1B75BC 0%, #D0E9F9 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)', height:'300px' }}
               >
                 <div style={{
               
                height:'100px'
            }}>
           
            </div>
                  <div className='col-lg-12'>
                <div className='row text-center'>
                   
                    <div className='col-lg-4'></div>
                    <div className=' col-lg-8' style={{
                        width:'500px'

                    }}><h1>El formulario ha sido completado con éxito</h1></div>
                     <div className='col-lg-2'></div>
                    
                </div>
                </div>
            
        
                 
         </div> 

         <div>
            <div  style={{
                width:'auto',
                height:'200px'
            }}>
           
            </div>
         </div>
     </div>
</Layout>
  )
}

export default FormEnviado