import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-headerSection shadow-md flex flex-col justify-center items-center border-b-4 border-t-4 border-gray-600">
        <div className="container flex flex-col items-center py-6 px-4 ">
          <div className="text-center text-black">
            <h1 className="text-3xl font-bold">Erkin Khoroshi Eisalou</h1>
            <p className="text-lg">Storyboard Artist/Developer</p>
          </div>
        </div>

        {/* Login In Button */}
        <div className="absolute right-20 shadow-lg">
          <Link href="/login">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Navigation Bar Section */}
      <nav className="bg-navbar text-white shadow border-b-4 border-gray-600">
        <div className="container mx-auto flex justify-center space-x-6 py-3">
          <Link href="/">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Home
            </button>
          </Link>
          <Link href="/storyboards">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Storyboards
            </button>
          </Link>
          <Link href="/animations">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Animations
            </button>
          </Link>
          <Link href="/coding-projects">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Coding Projects
            </button>
          </Link>
          <Link href="/illustrations">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Illustrations
            </button>
          </Link>
          <Link href="/resume">
            <button className="bg-white border-2 border-gray-600 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition shadow-lg"> 
                Resume
            </button>
          </Link>
        </div>
      </nav>

       {/* Main Body */}
      <div className="flex min-h-screen">

        {/* Left Sidebar */}
        <aside className="w-1/5 bg-main p-4">
        </aside>

        {/* Main Content */}
        <main className="container flex-1 flex-col px-10 py-4 justify-left bg-main text-black ">
          <div className="flex-row bg-white p-5 my-5 border-4 border-gray-600 rounded-md shadow-lg ">
            <h1 className="text-3xl mb-5">Games</h1>
            <div className="w-full max-w-6xl mx-auto aspect-video">
              <video className="w-full rounded-lg shadow-lg"
                controls
                autoPlay
                muted>
              <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="flex-row bg-white p-5 my-5 border-4 border-gray-600 rounded-md shadow-lg ">
            <h1 className="text-3xl mb-5">Mobile Applications</h1>
            <div className="w-full max-w-6xl mx-auto aspect-video">
              <video className="w-full rounded-lg shadow-lg"
                controls
                autoPlay
                muted>
              <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>


          <div className="flex-row bg-white p-5 my-5 border-4 border-gray-600 rounded-md shadow-lg ">
            <h1 className="text-3xl mb-5">Websites</h1>
            <div className="w-full max-w-6xl mx-auto aspect-video">
              <video className="w-full rounded-lg shadow-lg"
                controls
                autoPlay
                muted>
              <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/5 bg-main p-4">
        </aside>
      </div>
    </>
    
    
  );
}
