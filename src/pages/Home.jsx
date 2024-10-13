import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-theme relative pt-[2rem]">
        <Navbar />
      </div>

      <div className="w-full bg-theme">
        <HeroSection />
      </div>

      <div className="w-full">
        <ContactUs />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Home