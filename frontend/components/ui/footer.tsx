import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="block" aria-label="PlanetPoints">
                  <img src="./images/Logo.png" width={60} height={60} alt="PlanetPoints Logo" />
                </Link>
              </div>
              <div className="text-gray-400">Join us in our mission to make sustainable living effortless and accessible. With PlanetPoints, every choice you make helps our planet.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">


            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; {new Date().getFullYear()} PlanetPoints. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}
