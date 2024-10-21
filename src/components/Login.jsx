import React,{useState,useRef,useEffect} from "react";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
function Login({onDisappear,signupVisible,setIsLoggedIn}){

    const [FormData,setFormData] = useState(
        {
            email:"",
            password:""
        }
    )
    const changeHandler = (event) => {
        const { name, value } = event.target;
       
        setFormData(prev => ({
          ...prev,
          [name]: value
        }))
      }

      async function submitHandler(event){
        event.preventDefault();
      
        //  Clear form data after submission
        setFormData({
            email:"",
            password:""
      });
      
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(FormData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Show success toast
          toast.success(data.message);
          setIsLoggedIn(true);
          onDisappear();
        } else {
          // Show error toast
          toast.error(data.message);
          if(data.message=="User is not registered"){
            signupVisible(true);
            onDisappear();
          }
        }
      } catch (error) {
        toast.error('An unexpected error occurred.');
      }
    }
    function visibility(){
        onDisappear();
        signupVisible();
    }
    const modalRef =useRef();
    // disappear when clicking on background 
    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onDisappear();
        }
    }
    // when login page appear body will unscrolled
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        }
    },[]);



    return (
        <div ref ={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
             {/* parent div */}
             <div className="bg-[#000000] rounded-xl px-16 py-10 flex flex-col gap-5 mx-4 items-center relative mt-20 z-50">
                {/* user icon div  */}
                <div className=" px-5 py-5 rounded-full absolute -top-14 bg-[#1CA3A3]">
                   <FaUser className="size-12 text-[white]"/>
                </div>
                {/* cross icon here  */}
                <button className="absolute right-4 top-5">
                        <RxCross2 className="text-[#1CA3A3] size-8" onClick={onDisappear}/>
                </button>
  
                <h3 className="text-[#FFFFFF] text-[1.6rem] font-semibold">Login Here..</h3>

                {/* form container */}
                <form className="flex flex-col gap-4" onSubmit={submitHandler} >
                    {/* Email container  */}
                    <div className="flex flex-col gap-2" >
                       <label className="text-white text-[1.3rem] font-semibold">Email <sup className="text-[#1CA3A3]">*</sup></label>
                       <input type="text" name="email" id="email" value={FormData.email} onChange={changeHandler}  placeholder="Enter Email" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC] z-10 touch-auto w-full" required/>
                    </div>

                    {/* Password container  */}
                    <div className="flex flex-col gap-2">
                       <label className="text-white text-[1.3rem] font-semibold">Password <sup className="text-[#1CA3A3]">*</sup></label>
                       <input type="password" name="password" id="password" value={FormData.password} onChange={changeHandler}  placeholder="Enter Password" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC] z-10 touch-auto" required/>
                    </div>

                    {/* login button  */}
                    <button className="w-full bg-[#1CA3A3] text-white rounded-lg py-1.5 font-semibold text-[1.2rem]">Login</button>
                    
                    {/* don't have an account section  */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <p className="text-[#FFFFFFCC] font-semibold">Don't have an account ?</p>
                        <a href="#" className="text-[#1CA3A3] font-semibold" onClick={visibility}>Sign Up</a>
                    </div>
                </form>
             </div>
       </div>
    );

}
export default Login;