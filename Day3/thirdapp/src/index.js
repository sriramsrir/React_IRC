import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
// import images from './Assets/images/mh.jpg';
// import images from './Assets/images/pmh.jpg';
// import images from './Assets/images/tmh.jpg';
// import images from './Assets/images/bmh.jpg';
// import images from './Assets/images/pb.jpg';
// import images from './Assets/images/hpb.jpg';
// import images from './Assets/images/hrpb.jpg';
// import images from './Assets/images/st.jpg';
// import images from './Assets/images/hst.jpg';
// import images from './Assets/images/hrst.jpg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
