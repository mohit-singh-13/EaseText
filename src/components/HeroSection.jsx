const HeroSection = () => {
  return (
    <div className="w-full h-[105vh] relative">
      <div className="absolute inset-0 bg-computer bg-center opacity-50 bg-no-repeat z-20 bg-[length:58.5rem_45rem] top-[-5rem]"></div>

      <div className="relative w-[90%] mx-auto pt-[2rem] h-full flex">
        <div className="flex justify-between items-center z-50 relative h-[85%] w-full 4xl:flex-row flex-col gap-5">
          <textarea name="input" id="input" placeholder="Type Here..." className="text-[1.3rem] w-[90%] xl:w-[36rem] h-[30rem] rounded-[3.4rem] p-[2rem] bg-white resize-non font-[Inter]">
          </textarea>

          <textarea name="output" id="output" placeholder="Result..." readOnly className="text-[1.3rem] w-[90%] xl:w-[36rem] h-[30rem] rounded-[3.4rem] p-[2rem] resize-non font-[Inter]">
          </textarea>

          <button className="absolute left-[50%] translate-x-[-5rem] bottom-[-4rem] 4xl:bottom-[0%] 5xl:top-[50%] 5xl:bottom-[43%] py-[0.5rem] rounded-[4.4rem] w-[10rem] text-white font-[Inter] border-[2px] border-white cursor-pointer hover:bg-btn hover:text-black hover:font-bold transition-all duration-200">Simplify</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
// 36
// 32.1
// 3.4
// border-[3px] border-red-500
// bg-[length:55.5rem_43rem]