import Link from 'next/link';

export default function Login() {
  return (
    <>
     {/* Header Section */}
     <header className="bg-headerSection shadow-md flex flex-col justify-center items-center">
        <div className="container flex flex-col items-center py-6 px-4">
          <div className="text-center text-black">
            <h1 className="text-3xl font-bold">Erkin Khoroshi Eisalou</h1>
            <p className="text-lg">Storyboard Artist/Developer</p>
          </div>
        </div>

        {/* Login In Button */}
        <div className="absolute right-20">
          <Link href="/login">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Navigation Bar Section */}
      <nav className="bg-navbar text-white shadow">
        <div className="container mx-auto flex justify-center space-x-6 py-3">
          <Link href="/">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Home
            </button>
          </Link>
          <Link href="/storyboards">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Storyboards
            </button>
          </Link>
          <Link href="/animations">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Animations
            </button>
          </Link>
          <Link href="/coding-projects">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Coding Projects
            </button>
          </Link>
          <Link href="/illustrations">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Illustrations
            </button>
          </Link>
          <Link href="/paintings">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Paintings
            </button>
          </Link>
          <Link href="/resume">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"> 
                Resume
            </button>
          </Link>
        </div>
      </nav>

       {/* Main Body */}
      <div className="flex h-screen">

        {/* Left Sidebar */}
        <aside className="w-1/5 bg-main p-4">
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex-col px-10 py-4 justify-left bg-main text-black">

          <div className="max-w-md mx-auto mt-8 p-6">
            <h1 className="text-3xl font-bold text-center mb-4 mt-25 py-5">Login</h1>
            {/* Form */}
            <form>
              {/* Username Field */}
              <div className="mb-4 text-2x1">
                <label htmlFor="username" className="block text-left text-lg mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-left text-lg mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  Submit
              </button>
            </form>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/5 bg-main p-4">
        </aside>
      </div>
    </>
  );
}
