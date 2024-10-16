import { useState } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    console.log(formData)

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-[#36B8B880] rounded-[2.8rem] md:w-[75%] w-[95%] h-[75% h-[85%] flex flex-col px-[2.5rem] py-[2.5rem] gap-6 libre-caslon-text-regular">
      <div className="flex flex-col 2xl:flex-row">
        <p className="text-[2rem] 2xl:w-[30%] w-full">Name</p>
        <input required type="text" name="name" value={formData.name} onChange={changeHandler} className="bg-[#099C8A] rounded-[4.4rem] 2xl:w-[70%] w-full px-[1rem] h-[3rem] text-white border" />
      </div>

      <div className="flex flex-col 2xl:flex-row">
        <p className="text-[2rem] 2xl:w-[30%] w-full">Phone</p>
        <input type="number" name="number" value={formData.number} onChange={changeHandler} className="bg-[#099C8A] rounded-[4.4rem] 2xl:w-[70%] w-full px-[1rem] h-[3rem] text-white border" />
      </div>

      <div className="flex flex-col 2xl:flex-row">
        <p className="text-[2rem] 2xl:w-[30%] w-full">E-Mail</p>
        <input required type="email" name="email" value={formData.email} onChange={changeHandler} className="bg-[#099C8A] rounded-[4.4rem] 2xl:w-[70%] w-full px-[1rem] h-[3rem] text-white border" />
      </div>

      <div className="flex h-full flex-col 2xl:flex-row">
        <p className="text-[2rem] 2xl:w-[30%] w-full">Message</p>
        <textarea required name="message" id="message" value={formData.message} onChange={changeHandler} className="bg-[#099C8A] rounded-[3rem] resize-none 2xl:w-[70%] w-full h-[8rem] text-white px-[1.5rem] py-[0.8rem] border"></textarea>
      </div>

      <button className="bg-[#3b5855] rounded-[4.4rem] self-end mr-[1rem] px-[2.2rem] py-[0.8rem] text-white font-bold uppercase tracking-widest">Send</button>
    </div>
  )
}

export default Form