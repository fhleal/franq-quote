import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, loginUser } from '../../../utils/auth';
import { User } from '../../../domains/User';
import useToast from '../../../hooks/toast/useToast';
import LoginView from './LoginView';

const Login = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    if (isAuthenticated()) {
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
