import { RxHamburgerMenu } from "react-icons/rx"
import Button from "./Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { IoMdCloseCircle } from "react-icons/io"

const Navbar = () => {
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

  return (
    <div className="w-[100%] h-[15vh] z-[100] relative flex items-center">
      <div className="w-[90%] flex items-center justify-between mx-auto relative">
        <div className="flex flex-col w-[35%]">
          <h1 className="font-[Limelight] text-[3rem] lg:text-[4rem]">EaseText</h1>
          <p className="text-[1rem] lg:text-[1.8rem] mt-[-2.5rem] lg:mt-[-1.5rem] capitalize absolute top-[6rem]">Your text, our simplification</p>
        </div>

        <div className="gap-6 3xl:flex hidden">
          <Button text={"Home"} />
          <Button text={"Contact Us"} />
          <Button text={"Login"} />
          <Button text={"Signup"} />
        </div>

        <div className="block 3xl:hidden cursor-pointer">
          <RxHamburgerMenu fontSize={"2.2rem"} onClick={navOpenHandler} />
        </div>
      </div>


      <div className="w-full max-h-max absolute top-0 translate-y-[-102%] 3xl:hidden bg-footer items-center py-[4rem]" id="res-nav">
        <IoMdCloseCircle className="absolute top-5 right-5" fontSize={"2rem"} onClick={navCloseHandler} />
        <ul className="flex flex-col gap-8 font-['LimeLight'] text-[2.2rem] px-8">
          <li>Home</li>
          <li>Contact Us</li>
          <li>Login</li>
          <li>Singup</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar