import { useRef } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Input } from "./InputsComponent";
import { Button } from "./ui/Button";
import axios from 'axios'
import { BACKEND_URL } from "../config";
// control component
interface popUp {
    open:boolean;
    onClose:()=> void;
}
export function CreateContentModal({open,onClose}:popUp){
const titleRef = useRef<HTMLInputElement>(null)
const linkRef = useRef<HTMLInputElement>(null)
const typeRef = useRef<HTMLInputElement>(null)


async function addContent(){
const title = titleRef.current?.value
const links = linkRef.current?.value
const types = typeRef.current?.value

await axios.post(BACKEND_URL+"/api/v1/content",{
    title,links,types
},{
    headers:{
        "Authorization":localStorage.getItem("token")
    }
})

}

return <div>
{open && <div className="flex items-center justify-center opacity-95 fixed left-0 right-0 w-full h-full bg-slate-300 ">
   <div >
    <div className=" bg-white  p-4 rounded-md">
        <div className="flex justify-end ">
            <div onClick={onClose} className="cursor-pointer">
             <CrossIcon size="md"/> 
            </div>
            
        </div>
        <div>
        <Input reference={titleRef} placeholder={"Title"}/>
        <Input  reference={linkRef} placeholder={"Link"}/>
        <Input  reference={typeRef} placeholder={"youtube/tweet"}/>
        </div>
        <div className="flex justify-center">
            <Button onClick={addContent} varient="primary" size="md" text="Submit"/>
        </div>
    </div>
    </div>
</div>}
</div>
}