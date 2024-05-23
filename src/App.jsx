import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider} from "./context/GlobalContext.jsx";
import Header from "./components/Header.jsx";
import MisHistorias from "./vistas/MisHistorias.jsx";
import GitLog from "./vistas/GitLog.jsx";


export default function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/mishistorias" element={<MisHistorias />} />
                    <Route path="/gitlog" element={<GitLog />} />
                    <Route path="/" element={<MisHistorias />} />
                </Routes>
            </Router>
        </GlobalProvider>
  )
}