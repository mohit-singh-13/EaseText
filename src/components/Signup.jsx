import React,{useState,useRef,useEffect} from "react";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
function Signup({onNotVisible,loginVisible}){
    const [FormData,setFormData] = useState(
        {
            name:"",
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
            name:"",
            email:"",
            password:""
        });
         // printing some toast
      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(FormData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Show success toast
          toast.success(data.message);
          loginVisible(true);
          onNotVisible();
        } else {
          // Show error toast
          toast.error(data.message);
          loginVisible(true);
          onNotVisible();
        }
      } catch (error) {
        toast.error('An unexpected error occurred.');
      }
    }
    function visibility(){
        onNotVisible();
        loginVisible();
    }

    const modalRef =useRef();
    // disappear when clicking on background 
    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onNotVisible();
        }
    }
    // when signup page appear body will unscrolled
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        }
    },[]);

      
    return (
        <div ref ={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
            {/* parent div */}
            <div className="bg-[#000000] rounded-xl px-16 py-10 flex flex-col gap-5 mx-4 items-center relative mt-40 z-200">
                {/* user icon div  */}
                <div className=" px-5 py-5 rounded-full absolute -top-14 bg-[#1CA3A3]">
                       <FaUser className="size-12 text-[white]"/>
                </div>
                <button className="absolute right-4 top-5">
                            <RxCross2 className="text-[#1CA3A3] size-8" onClick={onNotVisible}/>
                </button>
                <h3 className="text-[#FFFFFF] text-[1.6rem] font-semibold">Signup Here..</h3>
                {/* form container */}
                <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                    {/* Name container */}
                    <div className="flex flex-col gap-2" >
                           <label className="text-white text-[1.3rem] font-semibold">Name <sup className="text-[#1CA3A3]">*</sup></label>
                           <input type="text" name="name" id="name" value={FormData.name} onChange={changeHandler}  placeholder="Enter Name" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                    </div>
                     {/* Email container */}
                     <div className="flex flex-col gap-2" >
                           <label className="text-white text-[1.3rem] font-semibold">Email <sup className="text-[#1CA3A3]">*</sup></label>
                           <input type="text" name="email" placeholder="Enter Email" id ="email" value={FormData.email} onChange={changeHandler}   className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                    </div>
                    {/* Password container  */}
                    <div className="flex flex-col gap-2">
                           <label className="text-white text-[1.3rem] font-semibold">Create Password <sup className="text-[#1CA3A3]">*</sup></label>
                           <input type="password" name="password" placeholder="Enter Password" id="password" value={FormData.password} onChange={changeHandler} className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                    </div>
                     {/* Signup button  */}
                     <button className="w-full bg-[#1CA3A3] text-white rounded-lg py-1.5 font-semibold text-[1.2rem]" >Signup</button>
                     {/* don't have an account section  */}
                     <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                            <p className="text-[#FFFFFFCC] font-semibold">Already have an account ?</p>
                            <p className="text-[#1CA3A3] font-semibold cursor-pointer"  onClick={visibility}>Login</p>
                        </div>
                </form>
            </div>


        </div>
    );
}

export default Signup;