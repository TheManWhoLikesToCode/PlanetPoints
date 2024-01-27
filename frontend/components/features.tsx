export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Empowering Sustainable Choices with Planet Points</h2>
            <p className="text-xl text-gray-400">Join our mission to incentivize and reward sustainable actions like recycling, using public transport, or purchasing eco-friendly products.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_recycling_icon.svg" alt="Recycling Icon" />
              <h4 className="h4 mb-2">Recycling Rewards</h4>
              <p className="text-lg text-gray-400 text-center">Earn tokens by recycling products. Submit proof and get rewarded for making the planet cleaner.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_public_transport_icon.svg" alt="Public Transport Icon" />
              <h4 className="h4 mb-2">Public Transport Points</h4>
              <p className="text-lg text-gray-400 text-center">Use public transport and collect points. It's our way of saying thank you for reducing carbon emissions.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_eco_friendly_product_icon.svg" alt="Eco-Friendly Product Icon" />
              <h4 className="h4 mb-2">Eco-Friendly Purchases</h4>
              <p className="text-lg text-gray-400 text-center">Get points for buying sustainable products. Submit your purchase proof and boost your sustainability score.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_token_exchange_icon.svg" alt="Token Exchange Icon" />
              <h4 className="h4 mb-2">Token Exchange</h4>
              <p className="text-lg text-gray-400 text-center">Exchange your tokens for discounts, services, or donate them to environmental causes. Make your impact count.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_admin_verification_icon.svg" alt="Admin Verification Icon" />
              <h4 className="h4 mb-2">Admin Verification</h4>
              <p className="text-lg text-gray-400 text-center">Our team verifies your sustainable actions, ensuring authenticity and rewarding genuine efforts.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-16 h-16 mb-4" src="path_to_sustainability_score_icon.svg" alt="Sustainability Score Icon" />
              <h4 className="h4 mb-2">Sustainability Score</h4>
              <p className="text-lg text-gray-400 text-center">Track your sustainable journey with our scoring system. Submit pictures of your eco-friendly purchases to earn points.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
