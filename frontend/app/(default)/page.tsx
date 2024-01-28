export const metadata = {
  title: 'PlanetPoints',
  description: 'Make Every Scan Count for the Planet with PlanetPoints.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/meet-the-team'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
