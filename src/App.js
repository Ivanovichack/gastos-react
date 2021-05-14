import Formm from './components/Formm'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>     
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Historial de gastos personales
          </a>         
        </nav>
        <div className="container mt-3">
          <h2>Captura el Gasto</h2>
          <Formm />
        </div>
    </div>
  );
}

export default App;
