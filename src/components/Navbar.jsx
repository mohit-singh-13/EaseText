import Button from "./Button"

const Navbar = () => {
  return (
    <div className="w-[90%] flex items-center justify-between mx-auto z-50 relative">
      <div className="flex flex-col relative w-[50%]">
        <h1 className="font-[Limelight] text-[4rem]">EaseText</h1>
        <p className="text-[1.8rem] mt-[-1.5rem] capitalize absolute top-[6rem]">Your text, our simplification</p>
      </div>

      <div className="flex gap-6 flex-wrap">
        <Button text={"Home"} />
        <Button text={"Contact Us"} />
        <Button text={"Login"} />
        <Button text={"Signup"} />
      </div>
    </div>
  )
}

export default Navbar