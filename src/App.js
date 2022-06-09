import React, { useState } from 'react';
import FileUploader from './FileUploader/FileUploader';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Register/Login';
import Register from './Login/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route
            path='/fileUpload'
            exact
            element={<FileUploader onSuccess={onSuccess}></FileUploader>}
          />
        </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
};

export default App;
