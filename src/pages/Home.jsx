import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import { useEffect } from "react"
import axios from "axios"

const Home = ({ onAppear, onVisible, isLoggedIn, setIsLoggedIn }) => {

  const authenticate = async () => {
    const res = await axios.get("http://localhost:5000/authenticate", {
      withCredentials: true
    });

    if (res.data.success) {
      setIsLoggedIn(true)
    }
  }
  
  useEffect(() => {
    authenticate();
  }, [])

  return (
    <div className="w-full relative">
      <div className="w-full bg-theme relative">
        <Navbar onAppear={onAppear} onVisible={onVisible} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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