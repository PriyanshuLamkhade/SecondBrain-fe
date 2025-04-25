import { ReactElement } from "react";

type Varient = "primary" | "secondary";
interface ButtonProps{
    varient : Varient;
    size : "sm" | "md" | "lg" ;
    text:string;
    startIcon ?: ReactElement;
    endIcon ? : ReactElement;
    onClick?: ()=>void;
    fullWidth ?: boolean;
    loading ?: boolean
}

const varientStyles ={
    "primary":"bg-purple-600  text-white",
    "secondary":"bg-purple-300  text-purple-600"
}
const sizeStyles ={
    "sm":"px-3 py-1 ",
    "md":"px-6 py-2",
    "lg":"px-9 py-3",
    
}

const defaultStyles="rounded-md flex items-center"

export const Button=(props:ButtonProps)=>{
    return <button onClick={props.onClick} className={`${varientStyles[props.varient]} ${sizeStyles[props.size]} ${defaultStyles} 
    ${props.fullWidth && ' w-full flex justify-center items-center'} ${props.loading ? "opacity-45 " :" " }`} disabled={props.loading}>
    {props.startIcon ? <div className="pr-2  ">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}   