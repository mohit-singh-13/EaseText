import Form from "./Form"

const ContactUs = () => {
  return (
    <div className="w-full h-[110vh] flex justify-between">
      <div className="bg-service w-[40%] flex justify-normal items-center">
        <img src="/ServiceSupport.png" alt="service" />
      </div>

      <div className="w-[60%] flex justify-center items-center flex-col gap-4">
        <h2 className="text-[3.5rem] libre-caslon-text-regular">Contact Us</h2>
        <Form />
      </div>
    </div>
  )
}

export default ContactUs