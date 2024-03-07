import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import User from './pages/User';
import Frestyle from './pages/Frestyle';
import Serenity from './pages/Serenity';
import Joy from './pages/Joy';
import Detail from './pages/Detail';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={ <User /> }>
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/signin"  element={ <Signin /> }>
        </Route>
        <Route path="/" ex element={ <Home /> }>
        </Route>
        <Route path="/signup" element={ <Signup /> }>
        </Route>
        <Route path="/detail" element={ <Detail /> }>
        </Route>
        <Route path="/freestyle" element={ <Frestyle /> }>
        </Route>
        <Route path="/serenity" element={ <Serenity /> }>
        </Route>
        <Route path="/joy" element={ <Joy /> }>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
