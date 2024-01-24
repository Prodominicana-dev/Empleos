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
//............................................

const ListVacantes = (data) => {
 

const {id,category}=data.data;
const [vacantes, setVacantes] = useState([])


//Consulta.......
const url=`${Url}JobOpening/Categoria/${id}`
useEffect(() => {

    axios.get(url).then((response)=>{
      setVacantes(response.data)
         
});
}, []);

//.................................................


const getVacantes=()=>{
  return(
      
       <div className='container'>
          <div className='col-lg-12'>
              <div className='row'>
                      {vacantes.map((vacante)=>(
                            <div className='col-lg-6'>
                             {vacante.status !== 'deshabilitado' && (
                              <Link className='' key={vacante.id} style={{textDecoration:'none'}} href={`/detalleVacante/${vacante.id}`}>  
                                  <Card className={style.alerta}>
                                      <Card.Body>
                                      <div className='col-lg-12'>
                                        <div className='row'>
                                            <div  className='col-lg-7'><h4>{vacante.name}</h4></div>
                                            <div className='col-lg-3'></div>
                                            {/* <div className={style.habilitado}>{vacante.status}</div> */}
                                          </div>
                                        </div>
                                        <hr/>
                                                <Card.Text>
                                                  <div className={style.desbordamiento}>
                                                    <div className='mb-4 text-muted'>{vacante.profile }</div>
                                                  </div>
                                                </Card.Text>
                                                        
                                                <PeriodoComponent id={vacante.id} status={vacante.status}/>
                                               
                                      </Card.Body>
                                  </Card>
                              </Link> 
                                )}
                          </div> 
                          ))}
              </div>
          </div>
      </div>
      
  )

}



console.log(data.data)

  return (
    <Layout pagina={category}>

<div className='container'>
  <div className={`col-lg-12 border border-blue-500 rounded p-4`} style={{ color: "#000000", WebkitTextStroke: "0.3px black" }}>
    <h1>{category}</h1>
  </div>

  <div className='mb-5 mt-8'>
    <div>
      {getVacantes()}
    </div>
  </div>

  <div>
    {/* Contenido adicional */}
  </div>

  <div className={`col-lg-12 border border-blue-500 rounded p-4`} style={{ height: "20em" }}>
    {/* Contenido adicional o espacio reservado */}
  </div>
</div>
      
      
    </Layout>
  )
}


export async function getServerSideProps({query:{index}}){
   
  const url = `${Url}Categoria/${index}`;
 

  const res = await fetch(url);
  const data = await res.json();

    return{
      props:{
        data
      }
    }
  
}

export default ListVacantes