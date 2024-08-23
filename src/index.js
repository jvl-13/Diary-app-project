import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import NoPage from './pages/NoPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import User from './pages/User';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Edit from './pages/Edit';
import WriteDiary from './pages/WriteDiary';
import Dashboard from './pages/Dashboard';
import DASS21 from './pages/DASS21';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={ <User /> } />
          <Route path="*" element={<NoPage />} />
          <Route path="/signin" element={ <Signin /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/detail/:journalId" element={ <Detail /> } />
          <Route path="/post/:templateName/:templateId" element={<WriteDiary />} />
          <Route path="/edit/:journalId" element={<Edit />} />
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/form" element={<DASS21 />} />

        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
