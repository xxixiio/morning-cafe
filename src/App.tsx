import { Navbar } from './sections/Navbar'
import { HeroSection } from './sections/HeroSection'
import { Features } from './sections/Features'
import { FeaturedProduct } from './sections/FeaturedProduct'
import { FeaturedCoffees } from './sections/FeaturedCoffees'
import { MissionStatement } from './sections/MissionStatement'
import { Blog } from './sections/Blog'
import { StoreLocations } from './sections/StoreLocations'
import { Footer } from './sections/Footer'

export default function CoffeeShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Features />
      <FeaturedProduct />
      <FeaturedCoffees />
      <MissionStatement />
      <Blog />
      <StoreLocations />
      <Footer />
    </div>
  )
}