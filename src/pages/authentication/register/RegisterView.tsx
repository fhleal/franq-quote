import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { User } from '../../../domains/User';

interface RegisterViewProps {
  register: UseFormRegister<User>;
  handleSubmit: UseFormHandleSubmit<User>;
  errors: FieldErrors<User>;
  onSubmit: (data: User) => void;
}

const RegisterView = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
}: RegisterViewProps) => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/5 flex items-center justify-center p-8 bg-gray-700 shadow-md">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
            Registration
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-100">
                Name (optional)
              </label>
              <input
                {...register('name')}
                className="mt-1 block w-full px-3 py-2 border font-light bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-100">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border font-light bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-300 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-100"
              >
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border font-light bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 transition"
            >
              Sign in
            </button>
            <p className="text-sm text-center text-gray-100 mt-4">
              Already have an account?
              <Link
                to="/login"
                className="text-green-300 hover:underline hover:text-green-200 transition-colors"
              >
                {' '}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div
        className="hidden md:block md:w-4/5 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      ></div>
    </div>
  );
};

export default RegisterView;
