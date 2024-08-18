"use client";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      image,
      type,
    };
    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      body: JSON.stringify(newUser),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Create an Account
      </h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your image URL"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            User Type
          </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select user type</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
