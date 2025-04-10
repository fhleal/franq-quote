import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from './pages/home/HomeView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <PrivateRoute>
            <HomeView />
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
