import { Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";

// import PenguinSlide from './components/PenguinSlide/PenguinSlide'
// import PenguinCard from './components/PenguinCard/PenguinCard'
// import PenguinButton from './components/PenguinButton/PenguinButton'


function App() {

  return (
    <>
    <header>
        <NavBar />
    </header>
      <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adopt" element={<AdoptPage />} />
    </Routes>
      </div>
    </>
  )
}

export default App
