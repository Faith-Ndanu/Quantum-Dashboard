'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const RegisterFarmer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically handle the registration logic
  };

  return (
    <>
      <Head>
        <title>Register a Farmer</title>
        <meta name="description" content="register a farmer" />
      </Head>
      <div className="flex min-h-screen bg-white">
        <div className="w-1/2 bg-amber-200 flex flex-col items-center justify-center p-12 ">
          <div className="mb-8">
            <Image
              src="/images/Rutubalogo-removebg-preview.png"
              width={300}
              height={300}
              alt="Rutuba Logo"
            />
          </div>
          <h1 className="text-6xl font-bold text-green-700">Welcome</h1>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-12">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Sign Up</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-green-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterFarmer;







