import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";



export function useContent(props: string){
    console.log("inside the state:"+props)
    const [contents,setContents] = useState([]);
    useEffect(()=>{

        if(props ===  "all"){
            axios.get(BACKEND_URL+"/api/v1/content",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            .then((x:any)=>setContents(x.data.content))
        }
        if(props === "x"){
            axios.get(BACKEND_URL+"/api/v1/allx",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            .then((x:any)=>setContents(x.data.content))
        }
        if(props === "youtube"){
            axios.get(BACKEND_URL+"/api/v1/allyoutube",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            .then((x:any)=>setContents(x.data.content))
        }
        if(props === "other"){
            axios.get(BACKEND_URL+"/api/v1/allother",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            .then((x:any)=>setContents(x.data.content))
        }
        if(props === "reddit"){
            axios.get(BACKEND_URL+"/api/v1/allreddit",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            .then((x:any)=>setContents(x.data.content))
        }
        
    },[props])
    return contents;
}

