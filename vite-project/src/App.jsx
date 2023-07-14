import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Basilio from "./components/Basilio/Basilio";
import Carlos from "./components/Carlos/Carlos";
import Caro from "./components/Caro/Caro";
import Edgar from "./components/Edgar/Edgar";
import JP from "./components/JP/JP";
import Nicole from "./components/Nicole/Nicole";
import Robert from "./components/Robert/Robert";
import Jamer from "./components/Jamer/Jamer";

function App() {
 
  return (
    <>
    <h1>HOLA GRUPO!</h1>
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/basilio" element={<Basilio />} />
          <Route path="/carlos" end element={<Carlos />} />
          <Route path="/caro" element={<Caro />} />
          <Route path="/edgar" element={<Edgar />} />
          <Route path="/jamer" element={<Jamer />} />
          <Route path="/jp" element={<JP />} />
          <Route path="/nicole" element={<Nicole />} />
          <Route path="/robert" element={<Robert />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
