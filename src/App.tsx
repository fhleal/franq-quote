import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import HomeView from './pages/home/HomeView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';

function App() {
  const authenticated = isAuthenticated();

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
      <Route
        path="/login"
        element={authenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/register"
        element={authenticated ? <Navigate to="/" /> : <Register />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
