import './App.css';
import ComponenteTituloH1 from "./CLASE2/ComponenteTituloH1";
import ComponenteLista from "./CLASE2/ComponenteLista";
import ComponenteTituloConParrafo from "./CLASE2/ComponenteTituloConParrafo";
import TituloH1ConEstilo from "./CLASE2/TituloH1ConEstilo";
import Ejercicio3 from "./CLASE2/Ejercicio3";
import Ejercicio4 from "./CLASE2/Ejercicio4";
import ComponenteConImage from "./CLASE2/ComponenteConImage";
import ComponenteNota from "./CLASE2/Tarea/componenteNota";

function App() {
    return (
        <div className="main">
            {/*<ComponenteTituloH1 />
                <ComponenteLista />
                <ComponenteTituloConParrafo />
                <TituloH1ConEstilo />
                <Ejercicio3 />
                <Ejercicio4 />
                <ComponenteConImage />*/}
            <ComponenteNota></ComponenteNota>
        </div>
    );
}

export default App;
