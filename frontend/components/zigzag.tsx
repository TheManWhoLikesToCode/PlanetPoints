import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Sustainable Living</div>
          <h1 className="h2 mb-4">Rewards for Every Green Step</h1>
          <p className="text-xl text-gray-400">Join us in making a difference with every sustainable choice you make. Earn rewards and contribute to a greener planet.</p>
        </div>

        {/* Items */}
        <div className="grid gap-20">

          {/* 1st item - Sustainable Transport */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Sustainable Transport" />
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Eco-Friendly Commute</div>
                <h3 className="h3 mb-3">Earn Points with Public Transport</h3>
                <p className="text-xl text-gray-400 mb-4">Use public transport and reduce your carbon footprint. Earn Planet Points for every journey and contribute to a cleaner environment.</p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Track your public transport usage</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Earn points for each journey</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Redeem points for rewards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd item - Eco-Friendly Products */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Eco-Friendly Products" />
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Sustainable Shopping</div>
                <h3 className="h3 mb-3">Points for Eco-Friendly Purchases</h3>
                <p className="text-xl text-gray-400 mb-4">Shop sustainably and earn rewards. From groceries to clothing, your eco-friendly choices can now earn you Planet Points.</p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Earn points on eco-friendly products</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Partnered with green brands</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Make a difference with every purchase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd item - Recycling Rewards */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Recycling Rewards" />
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Recycling Rewards</div>
                <h3 className="h3 mb-3">Turn Waste into Worth</h3>
                <p className="text-xl text-gray-400 mb-4">Recycle and earn rewards. Our platform makes it easy to track your recycling habits and reward you for helping the planet.</p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Track your recycling activities</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Earn points for each recycled item</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Contribute to a sustainable future</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}
