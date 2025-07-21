import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    if (!email) return "Email is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Invalid email";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setTouched(true);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    setError(validationError);
    setTouched(true);
    if (!validationError) {
      setSubmitted(true);
      setEmail("");
      setTouched(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mt-0">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight mb-2">Client Nest</h1>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Forgot your password?</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email and we'll send you a reset link.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              onBlur={() => setTouched(true)}
              className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${error && touched ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="you@example.com"
            />
            {error && touched && (
              <p className="mt-1 text-xs text-red-500">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            Send Reset Link
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-green-600 text-center text-sm">
            If this email is registered, a reset link has been sent.
          </div>
        )}
        <div className="flex items-center justify-center mt-4">
          <Link to="/auth/login" className="text-sm text-blue-600 hover:text-blue-500">Back to Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
