import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
//import App from './App';
import ResponsiveAppBar from './Intro';
// import ContactUs from './Contact';

import reportWebVitals from './reportWebVitals';
// import About from './about';
// import Skill from './skill';
// import Resume from './resume';
// import Portfolio from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    {/* <ContactUs/> */}
   
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
