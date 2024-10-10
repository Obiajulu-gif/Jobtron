// src/components/HeroSection.js
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <header className="relative bg-blue-600 text-white py-20 overflow-hidden">
      {/* Background Image (visible on mobile only) */}
      <div className="absolute inset-0 bg-[url('/images/work.svg')] bg-cover bg-center opacity-20 lg:hidden"></div>

      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-4">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Find Your Perfect Remote Job
          </h1>
          <p className="text-lg mb-6">
            Jobtron connects job seekers with top remote job opportunities around the world. Work from anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center lg:items-stretch">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="px-4 py-2 rounded-lg text-gray-700 w-full sm:w-auto mb-4 sm:mb-0 lg:mr-4"
            />
            <Link href="/jobs" passHref>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105">
                Search
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration Section (Desktop Only) */}
        <div className="hidden lg:block lg:w-1/2 lg:ml-10 mt-6 lg:mt-0 ">
          <Image
            src="/images/jobHunt.svg"
            alt="Remote job illustration"
            width={500}
            height={500}
            className="flex justify-between items-center"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
