//import logo from './logo.svg';
import ReactDOM from 'react-dom/client'
import './App.css';
import Clinician from './pages/ClinicianPages/Clinician';
import NonClinician from './pages/NonClinicianPages/Non-Clinician';
import * as React from "react";
import ReferralForm from './pages/ReferralPages/ReferrerPage';
import GridTable from './components/cliniciangrid';
//import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/clinician" element={<Clinician />} />
          <Route path="/nonclinician" element={<NonClinician />} />
          <Route path="/refer" element={<ReferralForm/>}/>
          <Route path="/cliniciangrid" element={<GridTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
