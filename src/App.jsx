import './App.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Foto from './images/foto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import Html from './images/html.png'
import Css from './images/css.png'
import Js from './images/js.png'
import Nodejs from './images/nodejs .png'
import Python from './images/python.png'
import React from './images/react.png'
import Java from './images/java.png'
import { useEffect, useState } from 'react';

function App() {

  const [showMenuBlock, setShowMenuBlock] = useState(false)
  const [collapseMenu, setCollapseMenu] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMenuBlock(true)
      } else {
        setShowMenuBlock(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setCollapseMenu(true);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${showMenuBlock ? 'showBlock' : ''}`} >
        <div className="container-fluid">
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setCollapseMenu(!collapseMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${collapseMenu ? '' : 'show'}`} >
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link" href="#seccion-inicio" onClick={handleClick}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobreMi" onClick={handleClick}>Sobre Mì</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades" onClick={handleClick}>Herramientas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#formacion" onClick={handleClick} >Formaciòn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" onClick={handleClick}>Contacto</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="seccion-inicio" id="seccion-inicio">
        <div className="cont-info">
          <div className="informacion">
            <h1>PABLO ALCARAZ</h1>
            <p>front-end developer</p>
          </div>
          <div className="redesSociales">
            <a href="https://www.facebook.com/nick.menta.1"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/pablodalcaraz/" ><FaInstagramSquare /></a>
            <a href="https://github.com/pablodalcaraz"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/pablo-alcaraz-822636186/"><IoLogoLinkedin /></a>
          </div>
        </div>
        <div className="foto">
          <img src={Foto} alt="foto de perfil" />
        </div>
      </div>

      <div className="sobreMi" id="sobreMi">
        <div className="seccionSobreMi">
          <div className="tituloDeSeccion">
            <h2>Sobre Mi</h2>
            <p>Me dedico al diseño y desarrollo de páginas web.</p>
          </div>
          <div className="fila">
            <div className="columna-sm">
              <div className="titulo">
                <div className='titulo-icon'>
                  <FontAwesomeIcon icon={faUser} style={{ color: '#007bff' }} /></div>
                <span className="titulo-detalle">Perfil</span>
              </div>
              <p>
                ¡Hola! Soy Pablo, estudiante de Desarrollo de Software
                con experiencia en el desarrollo de páginas web. Aunque carezco de
                experiencia profesional, mi dedicación y proyectos independientes
                en GitHub reflejan mi compromiso con la programación.
                Anteriormente, he trabajado en roles centrados en la atención al
                cliente y la resolución de problemas, lo que ha fortalecido mis
                habilidades de comunicación y empatía, fundamentales en cualquier
                entorno laboral. Me destaco por ser colaborativo, con habilidades
                interpersonales sólidas y una fuerte determinación para alcanzar
                metas. Estoy buscando oportunidades que me permitan aplicar mis
                habilidades en desarrollo de software y contribuir con soluciones
                innovadoras. Abierto a roles de prácticas o pasantías, estoy
                emocionado por las oportunidades de crecimiento profesional que el
                sector tecnológico ofrece.
              </p>
            </div>
            <div className="columna-sm">
              <div className="titulo">
                <div className='titulo-icon'>
                  <FontAwesomeIcon icon={faMapMarker} style={{ color: '#007bff' }} /></div>
                <span className="titulo-detalle">Ubicación</span>
              </div>
              <p>
                Soy un Desarrollador Front End con Sede en San Luis,
                capital de la provincia homónima en Argentina, es el escenario
                donde desarrollo mi carrera como desarrollador front end. Situada
                en las majestuosas Sierras de San Luis y con un clima templado
                mediterráneo, esta región ofrece un entorno inspirador y tranquilo
                para mi trabajo. Además, me estoy formando en la Universidad de La
                Punta, donde la excelencia académica se combina con un enfoque
                práctico en el campo de la tecnología. San Luis no solo es
                conocida por sus hermosos paisajes naturales, sino también por su
                creciente importancia en la industria tecnológica. En el predio de
                la Universidad de La Punta se encuentra el PILP, un polo de
                desarrollo tecnológico que alberga alrededor de 20 empresas de la
                industria, proporcionando un ecosistema vibrante y colaborativo
                para el desarrollo de proyectos innovadores.
              </p>
            </div>

            <div className="columna-sm">
              <div className="titulo">
                <div className='titulo-icon'>
                  <FontAwesomeIcon icon={faFlag} style={{ color: '#007bff' }} /></div>
                <span className="titulo-detalle">Intereses</span>
              </div>
              <p>
                Como apasionado del desarrollo web, me impulsa la oportunidad de
                formar parte de una industria en constante crecimiento, donde la
                innovación es clave. Utilizo React.js en mis proyectos y estoy
                constantemente buscando aprender nuevas tecnologías y metodologías
                que me permitan estar al tanto de las últimas tendencias y ofrecer
                soluciones efectivas y escalables. Mi experiencia en proyectos
                grupales durante mis estudios universitarios ha fortalecido mis
                habiliNamedades de trabajo en equipo y resolución de problemas,
                preparándome para enfrentar desafíos en entornos profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="habilidades" id="habilidades">
        <div className="seccionHabilidades">
          <div className="titulo-habilidades">
            <h2 className="titulo-seccion">Herramientas</h2>
          </div>
          <div className="cont-items">
            <div className="item">
              <img src={Html} alt="logo html" />
              <h3>Html</h3>
            </div>
            <div className="item">
              <img src={Css} alt="logo css" />
              <h3>Css</h3>
            </div>
            <div className="item">
              <img src={Js} alt="logo javascript" />
              <h3>JavaScript</h3>
            </div>
            <div className="item">
              <img src={Java} alt="logo java" />
              <h3>Java</h3>
            </div>
            <div className="item">
              <img src={Python} alt="logo python" />
              <h3>Python</h3>
            </div>
            <div className="item">
              <img src={React} alt="logo react" />
              <h3>React</h3>
            </div>
            <div className="item">
              <img src={Nodejs} alt="logo node" />
              <h3>Nodejs</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="formacion" id="formacion">
        <div className="seccionFormacion">
          <h2 className="titulo-fomacion">Formación</h2>
          <div className="informacion">
            <div className="fila">
              <div className="columna-ed">
                <div className="formacion-1">
                  <h3>Universidad de La Punta</h3>
                  <p>2023 - Actualidad</p>
                  <p>Tecnicatura universitaria en Desarrollo de Software</p>
                </div>
              </div>
              <div className="columna-ed">
                <div className="formacion-2">
                  <h3>Ticmas Academy</h3>
                  <p>2023</p>
                  <p>Manipulación de datos en Python</p>
                </div>
              </div>
              <div className="columna-ed">
                <div className="formacion-3">
                  <h3>Ticmas Academy</h3>
                  <p>2022</p>
                  <p>Primeros pasos en el Front-End</p>
                </div>
              </div>
              <div className="columna-ed">
                <div className="formacion-4">
                  <h3>Argentina Programa</h3>
                  <p>2021</p>
                  <p>
                    Fundamentos de la programación, programación orientación
                    orientada a objetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contacto" id="contacto">
        <div className="seccionContacto">
          <h2 className="titulo">Contacto</h2>

          <div className="fila-ct">
            <div className="columna-ct">
              <p><FontAwesomeIcon icon={faMobile} style={{ color: '#007bff', marginRight: '10px' }} />Teléfono</p>
              <a className="info" href="tel:+54 2665017734">2665017734</a>
            </div>

            <div className="columna-ct">
              <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#007bff', marginRight: '10px' }} />e-mail</p>
              <a className="info" href="mailto:pablodalcaraz@gmail.com">pablodalcaraz@gmail.com</a>

            </div>
          </div>
          <footer id="copyright">
            Copyright&copy; 2024 - Página creada por pablodalcaraz - Todos los
            derechos reservados
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
