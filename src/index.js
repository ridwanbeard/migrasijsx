import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/View/Home'
import Jshome from './View/JSHome';
import JSProfile from './View/JSProfile';
import EmpHome from './View/EmpHome';
import Empmyjobs from './View/Empmyjobs';
import JSDetailjob from './View/JSDetailjob';
import JSApplication from './View/JSApplication';
import EmpProfile from './View/EmpProfile';
import Emppostjob from './View/Emppostjob';
import Empfindjs from './View/Empfindjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}> 
          <Route path="/" element={<Home/>} />
          <Route path="/JSHome" element={<Jshome/>} />
          <Route path="/JSProfile" element={<JSProfile/>} />
          <Route path='/JSDetailjob' element={<JSDetailjob/>} />
          <Route path="/EmpHome" element={<EmpHome/>} />
          <Route path='EmpProfile' element={<EmpProfile/>} />
          <Route path='/Emppostjob' element={<Emppostjob/>} />
          <Route path="/Empmyjobs" element={<Empmyjobs/>}/>
          <Route path='/Empfindjs' element={<Empfindjs/>} />
          <Route path='/JSApplication' element={<JSApplication/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
