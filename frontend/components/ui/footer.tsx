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

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Explore</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/about" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/how-it-works" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">How It Works</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/sustainability" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sustainability</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/blog" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/faq" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQs</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/contact" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Legal</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/terms" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Terms of Service</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/privacy" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* Social Icons */}
              {/* Add your social media links here */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; {new Date().getFullYear()} PlanetPoints. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}
