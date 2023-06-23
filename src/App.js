import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
