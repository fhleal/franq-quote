import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { User } from '../../../domains/User';

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
}

const LoginView = ({ onSubmit, register, errors }: Props) => {
  return (
    <div className="flex h-screen">
      <div
        className="hidden md:block md:w-4/5 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      ></div>

      <div className="w-full md:w-1/5 flex items-center justify-center p-8 bg-gray-700 shadow-md">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
            Login
          </h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-100"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border font-light bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                id="password"
                type="password"
                {...register('password')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 transition"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-100 mt-4">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-green-300 hover:underline hover:text-green-200 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
