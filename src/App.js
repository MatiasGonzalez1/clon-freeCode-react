import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de freeCodeCamp</h1>
        <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        img='1'
        alt='Foto persona 1'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavasCript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavasCript, asi como estructuras de datos y algoritmos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ing. de software en Spotify'
        />
         <Testimonio
        nombre='Loraine Wang'
        pais='Singapur'
        img='2'
        alt='Foto persona 2'
        cargo='Ingeniera de Software'
        empresa='Amazon'
        testimonio='Siempre he tenido problemas para aprender JavasCript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavasCript, asi como estructuras de datos y algoritmos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ing. de software en Spotify'
        />
<Testimonio
        nombre='Sarah Chima '
        pais='Miami'
        img='3'
        alt='Foto persona 3'
        cargo='Ingeniera de Software'
        empresa='Chat Desk'
        testimonio='Siempre he tenido problemas para aprender JavasCript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavasCript, asi como estructuras de datos y algoritmos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ing. de software en Spotify'
        />
        
      </div>
    </div>
  );
}

export default App;
