import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { LockClosedIcon } from "@heroicons/react/solid";
import withPublicRoute from "../../utils/withPublicRoute";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupObject = {
    username: username,
    email: email,
    password: password,
  };

  const { signupUser } = useContext(AuthContext);

  const signupHandler = (e) => {
    e.preventDefault();
    signupUser(signupObject);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/logo/logo-orange.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/auth/signin"
              className="font-medium text-brand hover:text-hover"
            >
              Sign in instead
            </a>
          </p>
        </div>
        <form
          onSubmit={signupHandler}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="cursor-pointer h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand hover:text-hover">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mb-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white opacity-60 group-hover:opacity-80"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withPublicRoute(Signup);
