import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import logoTareas from './imagenes/tareas.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img className='logo' src={logoTareas} />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
