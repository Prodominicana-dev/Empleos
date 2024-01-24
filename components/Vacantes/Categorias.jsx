
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link';

//bootstrap....
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

//................
import style from '../../styles/Categoria.module.css'
//.........
import {Url} from '../Url/URL';

const Categorias = () => {

const [categorias, setCategorias] = useState([])


//Consulta.......
const url=`${Url}Categoria`
useEffect(() => {

    axios.get(url).then((response)=>{
        setCategorias(response.data)
         
});
}, []);

const getCategorias=()=>{
    return(
        <>
         <div className='container'>
            <div className='col-lg-12'>
                <div className='row'>
                        {categorias.map((categoria)=>(
                    
                            <div key={categoria.id} className='col-lg-3 '>
                            <Link className='border-none font-light line-height-2 text-blue-500' key={categoria.id} style={{textDecoration:'none'}} 
                            // href={`/vacante-else?categoriaid=${categoria.id}`} 
                            as={`vacante/${categoria.id}`}>  
                                <div className='mb-5'>
                                <Card className={style.alerta}>
                                    {/* <Card.Img className='mt-0' variant="top" style={{padding:'4rem'}} src="https://hunty.com/wp-content/uploads/3-pasos-para-empezar-a-buscar-vacantes-de-trabajo.jpg" /> */}
                                    <Card.Body>
                                        <h2 className='text-center mb-0 text-muted'>{categoria.category}</h2>
                                        
                                    </Card.Body>
                                </Card>
                                </div>
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
    <>
    <div className='container'>
        
        <div className=' mb-5 mt-8'>
            <div className='text-center mb-5 mt-5'>
                    <h1>CATEGORIAS</h1>
            </div>
            <hr className='mb-5 mt-8'/>
            <div>
                {getCategorias()}
            </div>
        </div>
    </div>
    </>
  )
}

export default Categorias