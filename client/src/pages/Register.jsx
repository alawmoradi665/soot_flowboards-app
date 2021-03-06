import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <div className="w-screen h-screen bg-riding-board bg-cover flex items-center justify-center">
      <div class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
                Create an account
            </h2>
          </div>

          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />

            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="username" class="sr-only">Username</label>
                <input id="username" name="username" type="username" onChange={(e) => setUsername(e.target.value)} required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Username" />
              </div>

              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" onChange={(e) => setEmail(e.target.value)} required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Password" />
              </div>

              <div>
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="password" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Confirm Password" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <label class="ml-2 block text-sm text-white hover:text-teal duration-300">
                  <a href="/">Go Home</a>
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-white hover:text-teal">
                  
                </a>
              </div>
            </div>

            <div>
              <button onClick={handleClick} disabled={isFetching} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-300">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-white group-hover:text-teal duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Create Account
              </button>
              {error && <p className="text-red font-bold">Something went wrong...</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;