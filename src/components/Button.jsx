const Button = ({ text }) => {
  return (
    <div className="px-[2rem] h-[1.9rem] rounded-[4.4rem] text-white font-[Inter] border flex justify-center items-center cursor-pointer hover:bg-btn hover:text-black transition-all duration-200">
      {text}
    </div>
  )
}

export default Button