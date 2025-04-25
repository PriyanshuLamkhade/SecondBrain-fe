
interface inputProp {
    reference:any
    placeholder: string
}
export function Input ({reference,placeholder}:inputProp){
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} 
        className=" border rounded m-2 px-4 py-2  text-black" 
        />
    </div>
}