import Image from 'next/image'

import Brand_Environmental_Record_Icon_B from '@/public/images/Brand_Environemental_Record_Icon_B.png'
import Eco_Friendly_Packaging_Icon_B from '@/public/images/Eco_Friendly_Packaging_Icon_B.png'
import Product_Sustainability_Report_Icon_B from '@/public/images/Product_Sustainability_Report_Icon_B.png'
import Brand_Environmental_Record_Icon_W from '@/public/images/Brand_Environemental_Record_Icon_W.png'
import Eco_Friendly_Packaging_Icon_W from '@/public/images/Eco_Friendly_Packaging_Icon_W.png'
import Product_Sustainability_Report_Icon_W from '@/public/images/Product_Sustainability_Report_Icon_W.png'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Empowering Sustainable Choices with PlanetPoints</h2>
            <p className="text-xl text-gray-400">Join our mission to provide detailed sustainability reports for products, empowering users to make informed, eco-friendly choices.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="w-16 h-16 mb-4" src={Product_Sustainability_Report_Icon_W} alt="Recycling Icon" />
              <h4 className="h4 mb-2">Product Sustainability Report</h4>
              <p className="text-lg text-gray-400 text-center">Get a detailed report on the sustainability of products, including environmental impact and eco-friendliness.</p>

            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="w-16 h-16 mb-4" src={Brand_Environmental_Record_Icon_W} alt="Public Transport Icon" />
              <h4 className="h4 mb-2">Brand Environmental Record</h4>
              <p className="text-lg text-gray-400 text-center">Assess the environmental practices and records of brands to make more eco-conscious purchasing decisions.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image className="w-16 h-16 mb-4" src={Eco_Friendly_Packaging_Icon_W} alt="Eco-Friendly Product Icon" />
              <h4 className="h4 mb-2">Packaging Eco-Friendliness</h4>
              <p className="text-lg text-gray-400 text-center">Evaluate the eco-friendliness of product packaging, helping you to choose products with minimal environmental impact.</p>

            </div>
          </div>
        </div>
      </div>

    </section >
  )
}
