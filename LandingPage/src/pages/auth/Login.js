import React, { useState } from 'react';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);a
  };


  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
          <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
              <p className="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div className="mt-5">
              <form className="form" onSubmit={onSubmit}>
                  <div className="form-group relative mt-6">
                      <input type="email" placeholder="Email Address" name="email" value={email} className="mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-blue-500 focus:outline-none" onChange={onChange} autocomplete="NA"/>
                      <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                  </div>
                  <div className="form-group relative mt-6">
                      <input type="password" placeholder="Password" name="password" value={password} className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" onChange={onChange} minLength="6" />
                      <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                  </div>
                  <div className="my-6">
                      <input type="submit" className="btn btn-primary w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none" value="Sign in" />
                  </div>
                  
              </form>
          </div>
      </div>
    </div>
);
};

export default Login;