import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/Login/LoginSignup';
import Dashboard from './Components/Navigation';
import Exam from './Components/Exam';
import Layout from './Components/Layout';
import Result from './Components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Layout><Exam /></Layout>} />
        <Route path="/result" element={<Layout><Result/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;


