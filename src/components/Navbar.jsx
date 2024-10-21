import { RxHamburgerMenu } from "react-icons/rx"
// import Button from "./Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { IoMdCloseCircle } from "react-icons/io"
import { toast } from "react-toastify"

const Navbar = ({onAppear,onVisible,isLoggedIn,setIsLoggedIn}) => {
  const navTimeLine = gsap.timeline();


  useGSAP(() => {
    navTimeLine.to("#res-nav", {
      y: "0",
      duration: 0.5,
    })

    navTimeLine.from("#res-nav ul li", {
      y: -30,
      duration: 0.5,
      // stagger: 5
      stagger: 0.3,
      opacity: 0
    })

    navTimeLine.pause()
  })

  const navOpenHandler = () => {
    navTimeLine.play()
  }

  const navCloseHandler = () => {
    navTimeLine.reverse();
  }
  const handleLogout = () => {
    // Remove the token from localStorage if needed
    localStorage.removeItem('token');
    // Update the login state
    setIsLoggedIn(false);
    toast.success("You've successfully logged out");
  };

  return (
    <div className="w-[100%] h-[15vh] z-[100] relative flex items-center py-[4rem]">
      <div className="w-[90%] flex items-center justify-between mx-auto relative">
        <div className="flex flex-col w-[35%]">
          <h1 className="font-[Limelight] text-[3rem] lg:text-[4rem]">EaseText</h1>
          <p className="text-[1rem] lg:text-[1.8rem] mt-[-2.5rem] lg:mt-[-1.5rem] capitalize absolute top-[6rem]">Your text, our simplification</p>
        </div>

        {/* <div className="gap-6 3xl:flex hidden">
          <Button text={"Home"} />
          <Button text={"Contact Us"} />
          <Button onClick={onAppear} text={"Login"} />
          <Button onClick={onVisible} text={"Signup"} />
        </div> */}
        <ul className="gap-6 3xl:flex hidden">
          <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200"><a>Home</a></li>
          <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200"><a>Contact Us</a></li>
          {!isLoggedIn ? (
          <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200" onClick={onAppear}><a>Login</a></li>
          ):(
            <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200" onClick={handleLogout}><a>Logout</a></li>
          )}
          {!isLoggedIn ? (
          <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200" onClick={onVisible}><a>Signup</a></li>
          ):(
            <li className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200" ><a>History</a></li>
          )}

        </ul>

        <div className="block 3xl:hidden cursor-pointer">
          <RxHamburgerMenu fontSize={"2.2rem"} onClick={navOpenHandler} />
        </div>
      </div>


      <div className="w-full max-h-max absolute top-0 translate-y-[-102%] 3xl:hidden bg-footer items-center py-[4rem]" id="res-nav">
        <IoMdCloseCircle className="absolute top-5 right-5" fontSize={"2rem"} onClick={navCloseHandler} />
        <ul className="flex flex-col gap-8 font-['LimeLight'] text-[2.2rem] px-8">
          <li>Home</li>
          <li>Contact Us</li>
          {!isLoggedIn ? (<li onClick={onAppear}>Login</li>):(<li onClick={handleLogout}>Logout</li>)}
          {!isLoggedIn ? (<li onClick={onVisible}>Singup</li>):(<li>History</li>)}
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar