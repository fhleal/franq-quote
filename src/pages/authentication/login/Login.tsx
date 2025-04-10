import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../utils/auth';
import { User } from '../../../domains/User';
import useToast from '../../../hooks/useToast';
import LoginView from './LoginView';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);

  const onSubmit = (data: User) => {
    const success = loginUser(data.email, data.password);

    if (success) {
      showToast('Login successful!', 'success');
      navigate('/');
    } else {
      showToast('Invalid email or password', 'error');
    }
  };

  return (
    <LoginView
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default Login;
