import './App.css';
import Info from './componentes/Info';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Informacion de personajes randoms</h1>
        <Info 
        nombre = 'Yoda bebe'
        detalle = 'Tiernaso'
        informacion = 'Grogu (también conocido como el Niño y llamado normalmente como Bebé Yoda por los fanáticos y los medios de comunicación), es un personaje ficticio de la serie de televisión original The Mandalorian basada en Star Wars y emitida en Disney+.'
        imagen = 'yoda'
        />
        <Info
        nombre = 'Jake el perro'
        detalle = 'Amigo'
        informacion = 'Jake es un personaje ficticio y principal en la serie de televisión estadounidense animada y de fantasía Adventure Time creada por Pendleton Ward donde funge el rol de protagonista, acompañante, mejor amigo y hermanastro de Finn.'
        imagen = 'jake'
        />
      </div>
    </div>
  );
}

export default App;
