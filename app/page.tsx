'use client'

import Image from "next/image";
import Link from 'next/link';

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
          <div className="flex-row bg-white p-5 my-5 border-4 border-gray-600 rounded-md shadow-lg">
            <h1 className="text-3xl">About Me</h1>
            <div className="flex space-x-4 p-4">
              <Image
                src={'/test1.jpg'}
                alt="Self-Portrait"
                width={960}
                height={540}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={'/test2.jpg'}
                alt="Self-Portrait"
                width={960}
                height={540}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-lg py-3">
              Hello future employers and other netizens! My name is Erkin Khoroshi Eisalou as placed everywhere on the website and I was born in Turkey, but live in the United States as a citizen. I am a senior computer science and a freshman animation student due to pursuing a double major at Augusta University. My current goal is to be a storyboard artist for the future goal of being a director, but also I have some experience with more traditional art. However, I also work on development projects for my own video games and music.   
            </p>
          </div>

          <div className="flex-row bg-white p-5 my-5 border-4 border-gray-600 rounded-md shadow-lg ">
            <h1 className="text-3xl mb-5">Most Recent Work - 05/25/2025</h1>
            <Image
              src={'/test3.jpg'}  // Replace with your image path or URL
              alt="test"
              width={1920}     // Set your preferred width
              height={1080}    // Set your preferred height
              className="rounded-lg shadow-lg " // Tailwind classes for style (optional)
            />
          </div>

          <div className="bg-white p-5 my-10 border-4 border-gray-600 rounded-md shadow-lg">
            <h1 className="text-3xl">Artist Statement</h1>
            <p className="text-lg py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla lorem. Praesent convallis placerat ultrices. Aenean nec tincidunt dolor, quis luctus felis. Nam feugiat ullamcorper turpis, at accumsan lorem dapibus sed. Duis scelerisque libero et lacus rutrum commodo. Cras ex nulla, cursus at elit non, rutrum sagittis dui. Suspendisse eu velit viverra, bibendum elit non, bibendum quam. Sed suscipit ligula aliquam malesuada elementum. Suspendisse semper, mauris a sodales molestie, purus leo laoreet felis, dictum convallis dui ex ut lacus. Nam fermentum suscipit arcu vel consequat.
            </p>
          </div>

          <div className="bg-white p-5 my-10 border-4 border-gray-600 rounded-md shadow-lg">
            <h1 className="text-3xl">Contact</h1>
            <p className="text-lg py-3">
               If you got to this point of looking through the site, and want to reach out about general information, potential collaborations, commissions, etc, then you can use email or message on social media. A follow on other platforms is also appreciated!
            </p>
            
            <div className="flex items-center justify-center py-5">
              <p className="text-lg px-3">
        
                <EnvelopeIcon className="w-5 h-5"/> 
                <a href={"mailto:ekhoroshieisalo@augusta.edu"} className="flex items-center text-blue-600 hover:text-blue-700" >
                   ekhoroshieisalo@augusta.edu
                </a>

              </p>
              <p className="text-lg px-3">
                <FaYoutube className="w-5 h-5 "/> 
                <a href="https://www.youtube.com/@sciencesmart1" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-red-600 hover:text-red-700">
                  ScienceSmart
                </a>
              </p>

              <p className="text-lg px-3">
                <FaInstagram className="w-5 h-5"/>
                <a href="https://www.instagram.com/sciencesmart1/" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-pink-500 hover:text-pink-600">
                  ScienceSmart1
                </a>
              </p>

              <p className="text-lg px-3">
                <FaTwitch className="w-5 h-5"/>
                <a href="https://www.twitch.tv/yourchannel" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-purple-600 hover:text-purple-700">
                  ScienceSmart1
                </a>
              </p>

              <p className="text-lg px-3">
                <FaTwitter className="w-5 h-5"/>
                <a href="https://x.com/ScienceSmart1" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-600">
                  ScienceSmart1
                </a> 
              </p>

              <p className="text-lg px-3">
                <FaLinkedin className="w-5 h-5"/>
                <a href="https://www.linkedin.com/in/erkin-khoroshi-eisalou/" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-blue-700 hover:text-blue-800">
                  Erkin Khoroshi
                </a> 
              </p>

            </div>
          </div>

          <div className="bg-white p-5 my-10 border-4 border-gray-600 rounded-md shadow-lg">
            <h1 className="text-3xl">Copyright Policy</h1>
            <p className="text-lg py-3">
              All rights are reserved; however, if you wish to use any of my works, then please contact me and we can reach an arragement depending on how the work would be used. Do not repost any animations on other websites like on Instagram and claim it as your own :3. Finally, do not use any of my work in generative AI models! 
            </p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/5 bg-main p-4">
        </aside>

      </div>
    </>
  );
}
