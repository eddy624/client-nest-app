import React, { useState } from "react";
import { Link } from "react-router-dom";
import rafaelImage from '../../assets/pexels-rafael-guajardo-194140-604684.jpg';

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!form.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ firstName: true, lastName: true, email: true, password: true, confirmPassword: true });
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful! (Demo only)");
      setForm({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
      setTouched({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-0 px-0">
      <div className="flex w-full h-screen shadow-lg rounded-none overflow-hidden bg-white md:bg-transparent min-h-[600px] md:min-h-[70vh]">
        {/* Left Side: Full Background Image with Overlay and Centered Content */}
        <div className="hidden md:flex relative w-[60%] h-full">
          <img
            src={rafaelImage}
            alt="Rafael Guajardo illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-10 space-y-8">
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Join Our Community</h2>
            <p className="text-lg mb-6 text-white drop-shadow-lg">Sign up to access exclusive features, connect with others, and grow your network. Experience the best tools for your business and personal growth.</p>
            <button className="px-6 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition">Learn More</button>
          </div>
        </div>
        {/* Right Side: Registration Form */}
        <div className="w-full md:w-[40%] bg-white p-8 flex flex-col justify-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-blue-700 tracking-tight mb-2">Client Nest</h1>
            <p className="text-base text-gray-500 mb-2">Unleash Your Social Potential.</p>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">Sign in</Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={handleChange}
                    onBlur={() => setTouched({ ...touched, firstName: true })}
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder="First name"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={() => setTouched({ ...touched, lastName: true })}
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder="Last name"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="you@example.com"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, password: true })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="At least 6 characters"
                />
                {errors.password && touched.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Re-enter your password"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

