import React, { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'

const Navbar = () => {
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log('Login Email:', email, 'Password:', password)
    setLogin(false)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    console.log('Signup:', { name, email, password })
    setSignup(false)
  }

  return (
    <>
      <nav className="bg-white text-black shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 p-4">

            {/* Logo */}
            <div className="text-2xl font-bold text-yellow-500">
              Explore Course
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSignup(true)}
                className="px-4 py-2 rounded-md text-sm font-medium text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white transition"
              >
                Register
              </button>
              <button
                onClick={() => setLogin(true)}
                className="px-4 py-2 rounded-md text-sm font-medium bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 hover:border border-yellow-500 transition"
              >
                Login
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Login Dialog */}
      <Dialog open={login} onClose={setLogin} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all sm:scale-100">
            <DialogTitle className="mb-6 text-center text-2xl font-bold text-gray-800">
              Welcome Back 👋
            </DialogTitle>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 hover:underline hover:text-blue-800">
                  Forgot password?
                </a>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setLogin(false)}
                  className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-700 transition"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setLogin(false)
                  setSignup(true)
                }}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signup} onClose={setSignup} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all sm:scale-100">
            <DialogTitle className="mb-6 text-center text-2xl font-bold text-gray-800">
              Create Your Account 📝
            </DialogTitle>
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:outline-none text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSignup(false)}
                  className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  Sign up
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setSignup(false)
                  setLogin(true)
                }}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default Navbar
