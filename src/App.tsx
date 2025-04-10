import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
