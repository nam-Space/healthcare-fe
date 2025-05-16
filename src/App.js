
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PatientPage from './pages/PatientPage';
import DoctorPage from './pages/DoctorPage';
import PharmacistPage from './pages/PharmacistPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/patients" element={<PatientPage />} />
      <Route path="/doctors" element={<DoctorPage />} />
      <Route path="/pharmacists" element={<PharmacistPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
