import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../../utils/auth';
import { User } from '../../../domains/User';
import { registerUser } from '../../../utils/storage';
import RegisterView from './RegisterView';

const Register = () => {
  useEffect(() => {
    if (isAuthenticated()) {
      <Navigate to="/" replace />;
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    registerUser(data);
    alert('User registered!');
  };

  return (
    <RegisterView
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
