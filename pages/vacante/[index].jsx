import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout';
import axios from 'axios';
import Link from 'next/link';

//bootstrap....
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

//estilo........
import style from '../../styles/vacante.module.css';
import PeriodoComponent from '../../components/Vacantes/PeriodoComponent';

//...........
import {Url} from '../../components/Url/URL';

const listVacantes = (data) => {

const {Id,Categoria}=data.data;
const [vacantes, setVacantes] = useState([])
const [fechaRegistro, setFechaRegistro] = useState('');

//Consulta.......
const url=`${Url}Vacantes/Categoria/${Id}`
useEffect(() => {

    axios.get(url).then((response)=>{
      setVacantes(response.data)
         
});
}, []);



const getVacantes=()=>{
  return(
      <>
       <div className='container'>
          <div className='col-lg-12'>
              <div className='row'>
                      {vacantes.map((vacante)=>(
                            <div className='col-lg-6 '>
                             
                              <Link className='' key={vacante.Id} style={{textDecoration:'none'}} href={`/detalleVacante/${vacante.Id}`}>  
                                  <Card className={style.alerta}>
                                      <Card.Body>
                                      <div className='col-lg-12'>
                                        <div className='row'>
                                            <div  className='col-lg-7'><h4>{vacante.NombreVacante}</h4></div>
                                            <div className='col-lg-3'></div>
                                            <div className={style.habilitado}>{vacante.Condicion}</div>
                                          </div>
                                        </div>
                                        <hr/>
                                                <Card.Text>
                                                  <div className={style.desbordamiento}>
                                                    <div className='mb-4 text-muted'>{vacante.PerfilPuesto}</div>
                                                  </div>
                                                </Card.Text>
                                                <PeriodoComponent Id={vacante.Id} Condicion={vacante.Condicion}/>
                                               
                                      </Card.Body>
                                  </Card>
                              </Link> 
                          
                          </div> 
                          ))}
              </div>
          </div>
      </div>
      </>
  )

}






  return (
    <Layout pagina={Categoria}>

      <div className='container'>

      <hr className='mb-6 mt-1'/>
        <div className={style.categoria}>
          <h1>{Categoria}</h1>
        </div>
          {/* <hr className='mb-5 mt-8'/> */}
          <div className=' mb-5 mt-8'>
              <div className='text-center mb-5 mt-5'>
                      <h1>Vacantes</h1>
              </div>
              <div>
                  {getVacantes()}
              </div>
          </div>
      </div>
    
      
    </Layout>
  )
}
export async function getServerSideProps({query:{index}}){
   
  const url = `${Url}Categoria/${index}`;
 

  const res = await fetch(url)
  const data = await res.json()

    return{
      props:{
        data
      }
    }
  
  }
export default listVacantes