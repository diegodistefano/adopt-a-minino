import { Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <header>
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
