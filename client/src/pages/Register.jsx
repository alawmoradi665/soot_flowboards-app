const Register = () => {
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
                <input id="username" name="username" type="username" autocomplete="username" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Username" />
              </div>

              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Password" />
              </div>

              <div>
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input id="confirm-password" name="confirm-password" type="confirm-password" autocomplete="confirm-password" required class="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal focus:border-teal focus:z-10 sm:text-sm" placeholder="Confirm Password" />
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
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal duration-300">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;