import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componants/NavBar';
import { MainRoute } from './Routes/MainRoute';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#607d8b"
    }}>
      <NavBar />
      <MainRoute />
    </div>
  );
}

export default App;
