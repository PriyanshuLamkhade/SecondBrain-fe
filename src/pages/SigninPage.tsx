import { useNavigate } from "react-router-dom"
import { Input } from "../components/InputsComponent"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios"
import { BrainIcon } from "../Icons/BrainIcon";


export const Signin= ()=>{
    interface SigninResponse {
        token: string;
      }
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null)
    async function signin(){
       const username = usernameRef.current?.value;
       const password = passwordRef.current?.value
       const response = await axios.post<SigninResponse>(BACKEND_URL+"/api/v1/signin",{
            username,password      
       })
      
       const jwt= response.data.token;
       localStorage.setItem("token",jwt)
       navigate("/dashboard")
    }
    const navigate = useNavigate()
    return <div className="bg-gray-200  gap-10 w-full flex flex-col  items-center">
           <div className="flex item-center mt-5 font-bold text-2xl ">
           <BrainIcon size="lg"/>
           Your Second Brain 
           </div>
        
        <div className="mt-4 bg-violet-600 rounded-2xl flex flex-wrap sm:flex-nowrap lg:w-[65vmax] w-[55vmax]  min-h-[35vmax]  ">
            <div id="left" className=" text-white  p-10 flex flex-col gap-4 justify-center items-center">
            <img src="https://secondbrain-hazel.vercel.app/assets/welcome-xMUkC7YG.png"  alt="welcome" className="w-[20vmax] h-[10vmax]" />
            <h1 className="mt-4 font-bold text-3xl">Start Your Journey</h1>
            <h2>Keep your links close and organized with Second Brain</h2>
            </div>
            
            <div className=" bg-gray-50 px-4 flex-wrap sm:flex-nowrap flex flex-col gap-1 justify-center items-center" >
            
            <h1 className="font-bold text-2xl mb-3">Log In</h1>
            <Input reference={usernameRef} placeholder="User Name"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <Button 
            onClick={signin}
            varient="primary" size="md" 
            fullWidth={false} loading={false} text="Signin"/>
             <div className="text-sm text-blue-500 cursor-pointer" onClick={()=>{navigate("/signup")}}>
               Don't have a account?
            </div>
        </div>

        </div>

      
    </div>
}
{/* <div className=" bg-gray-50 p-10 h-full  flex flex-col justify-center gap-3  items-center ">
            <Input reference={usernameRef} placeholder="UserName"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <Button 
            onClick={signin}
            varient="primary" size="md" 
            fullWidth={true} loading={false} text="Signin"/>
            <div className="text-sm text-blue-500 cursor-pointer" onClick={()=>{navigate("/signup")}}>
               Don't have a account?
            </div>
            </div> */}