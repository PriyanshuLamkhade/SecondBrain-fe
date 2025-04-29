import { Button } from "../components/ui/Button";
import { BrainIcon } from "../Icons/BrainIcon";
import "./HomePage.css"
import { useNavigate } from "react-router-dom"


export function HomePage() {
    const navigate = useNavigate()
    return <div className="bg-slate-200 w-full flex flex-col items-center">
        <div id="nav" className="flex gap-4 bg-white w-[50vmax] rounded-3xl
        items-center py-3 px-6  justify-evenly mt-3 self-center">
           
            <a href="/" className="flex items-center gap-2 text-2xl font-semibold">  <BrainIcon size="lg" /> SecondBrain</a>
            <a href="/" className="hover:bg-slate-200 hover:-translate-y-1 font-semibold rounded-full p-3">Dashboard</a>
            <a href="/"  className="hover:bg-slate-200 hover:-translate-y-1 font-semibold rounded-full p-3">Features</a>
            <Button
            
                onClick={()=>{navigate("/signin")}}
                varient="secondary" size="md"
                fullWidth={false} loading={false} text="Sign In" />
                
        </div>
        <div id="moving1" className=""></div>
        <div id="moving2" className=""></div>
        <div id="moving3"></div>
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="circle1"></div>
        
        <div className=" flex flex-col items-center mt-16 gap-3 text-center">
            <h1 className="font-bold text-[5vmax] text-violet-600  ">Save, Organize,<br /> Share</h1>
            <h2  className="font-bold text-[3vmax] text-slate-600  ">All In One Place</h2>
            <h3  className="font-bold text-[2vmax]  text-slate-500 ">Store, analyze and access your Reddit, Youtube and X links <br />
                with intelligent embeddings
            </h3>
            <button 
            onClick={()=>{navigate("/signin")}}
            className="bg-violet-500 p-4 rounded-full mt-5 text-white ">
                Way to Dashboard
            </button>
        </div>
    </div>
}
