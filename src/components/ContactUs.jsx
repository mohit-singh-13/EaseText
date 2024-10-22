import Form from "./Form"

const ContactUs = () => {
  return (
    <div className="w-full 4xl:h-[120vh] max-h-max flex justify-between 4xl:flex-row flex-col items-center 4xl:items-stretch">
      <div className="bg-service 4xl:w-[40%] flex items-center justify-center w-full">
        <img src="/ServiceSupport.png" alt="service" className="" />
      </div>

      <div className="4xl:w-[60%] 2xl:w-[80%] w-full flex justify-center items-center flex-col gap-[1rem] py-[3rem]" id="contact">
        <h2 className="text-[3.5rem] libre-caslon-text-regular">Contact Us</h2>
        <Form />
      </div>
    </div>
  )
}

export default ContactUs