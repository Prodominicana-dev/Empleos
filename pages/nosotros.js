

import React, { useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const Nosotros = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Layout pagina='Quiénes Somos'>
      <section className="hero-section">
        <div className="hero-slider owl-carousel">
          <div className="hero-item set-bg" style={{ backgroundImage: 'url(//www.prodominicana.gob.do/wp/wp-content/uploads/resized/aad7b99acf814c3d2f90e5c65f765973/ceird-web-head-quienes-somos.jpg)'}} >
            <div className="container">
              <div className="row">
                <div className="col-xl-12" style={{ padding: '15em' }}>
                  <h2 style={{ background: 'transparent' }}>
                    <div><span style={{ background: 'transparent', fontSize: '2em', color: 'white' }}>Quiénes Somos</span></div>
                    <div><span style={{ background: 'transparent', fontSize: '1em', color: 'white' }}>Somos el Centro de Exportación e Inversión de la República Dominicana (CEI-RD). Tenemos el objetivo contribuir al incremento de las exportaciones y las inversiones en favor de nuestra economía. Brindamos servicios integrales a todos los inversionistas, exportadores y compradores, de forma gratuita.</span><br /></div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container-fluid">
          {/* Resto de tu código */}
          <div className="row">
                <div className="d-none d-lg-block col-lg-5 p-0">
                    <div className="testimonial-bg set-bg"  >
                    <img src="https://prodominicana.gob.do/wp/wp-content/themes/ceird/img/ceird.jpg"  />
                    </div>
                </div>
                <div className="col-lg-7 p-0" 
                style={{backgroundColor:'black'}}
                >
                    <div className="testimonial-box">
                        <div className="testi-box-warp">
                            <div className="testimonial-slider">
                                
                            <Slider  ref={sliderRef} {...settings}>
                                    <div className="ml-3">
                                    
                                        <h5 style={{fontSize:'38px',color:'#758EBD'}}>Misión</h5>
                                        <p style={{fontSize:'28px',color:'#758EBD'}}> Crear valor y servir para optimizar la atracción de inversión y mejorar nuestra presencia exportadora en los mercados internacionales incentivando empleos de calidad.</p>
                                    
                                    </div>

                                    <div className="ml-3">
                                    
                                        <h5 style={{fontSize:'38px',color:'#758EBD'}}>Visión</h5>
                                        <p style={{fontSize:'28px',color:'#758EBD'}}> Ser la agencia de promoción de exportación e inversión más eficiente de la región, para una República Dominicana más competitiva, productiva y desarrollada.</p>
                                    
                                    </div>
                           </Slider>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      </section>

      <div className="container">
        {/* Resto de tu código */}
        <header className="wow fadeIn animated" style={{visibility: 'visible',marginTop:'35px'}}>
        <h2 className="text-center" style={{color:'#00A3E0'}}>Valores</h2>
    </header>
    <hr className="lineMenu mt-5 mb-5" />
    
    <div className="row">
        <div className="col-lg-6 col-md-6">
            <div className="service-item">
                <div className="valueCtn wow fadeInLeft animated" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Excelencia</h3>
                    <p>Ponemos todo nuestro empeño en hacer nuestro trabajo del mejor modo posible, para mantenernos como institución modelo.</p>
                </div>

                <div className="valueCtn wow fadeInLeft animated" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Trabajo en Equipo</h3>
                    <p>Creemos que nuestro trabajo se enriquece y nuestros servicios mejoran cuando compartimos valor e información en equipo</p>
                </div>

                <div className="valueCtn wow fadeInLeft animated" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Integridad</h3>
                    <p>Nos mueve el amor al servicio público y por ello actuamos correctamente, con apego a la ley y a los valores éticos.</p>
                </div>

                <div className="valueCtn  wow fadeInLeft animated" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Eficiencia</h3>
                    <p>Optimizamos los recursos disponibles para ofrecer los servicios en el menor tiempo y con la mayor calidad posible.</p>
                </div>

                <div className="valueCtn wow fadeInLeft animated" data-wow-delay="1s" style={{visibility: 'visible', animationDelay: '1s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Confianza</h3>
                    <p>La palabra dada y la consistencia de las acciones con esta, es parte importante de nuestro intercambio de negocios. Por eso cuidamos nuestras relaciones profesionales y de inversión generando confianza.</p>
                </div>
              
            </div>
        </div>
        <div className="col-lg-6 col-md-6">
            <div className="service-item">
                <div className="valueCtn wow fadeInRight animated" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Transparencia</h3>
                    <p>Trabajamos con apertura y transparencia para que nuestra labor pueda ser fiscalizada y reconocida asegurando la confianza.</p>
                </div>

                <div className="valueCtn wow fadeInRight animated" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Vocación de servicio</h3>
                    <p>Creemos en el servicio público. Atendemos con esmero, calidad y de manera oportuna, los requerimientos de nuestros clientes internos y externos.</p>
                </div>

                <div className="valueCtn wow fadeInRight animated" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Proactividad</h3>
                    <p>Nos anticipamos, gestionamos, conocemos y satisfacemos las expectativas del cliente en función de los objetivos propuestos para garantizar el éxito.</p>
                </div>

                <div className="valueCtn wow fadeInRight animated" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s'}}>
                    <span className="littleCircle"><FontAwesomeIcon icon={faStar} /></span>
                    <h3>Equidad</h3>
                    <p>Actuamos de manera justa con nuestros clientes, sin importar condición económica, social, política y de género, respetando y sirviendo a todos los seres humanos por igual.</p>
                </div>
                
            </div>
        </div>
        </div>
        

<style>
    {
    `.valueCtn h3{
        font-size:1.4em;
        display:inline;
        vertical-align:middle;
    }
    .littleCircle{
        width:80px;
        height:80px;
        background-color:#00A3E0;
        color:#fff;
        padding: 10px;
        margin-right: 10px;
        border-radius:50%;
        padding: 10px 11px;
    }
    .littleCircle p{
        font-size:1.5em;
    }
    .valueCtn p{
        font-size:1em;
        margin-bottom: 25px;
        margin-top:10px;
    }
    `
    }
</style>


      </div>
    </Layout>
  );
};

export default Nosotros;