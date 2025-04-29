
interface inputProp {
    reference:any
    placeholder: string
    className ?: string
}
export function Input ({reference,placeholder,className}:inputProp){
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} 
        className={`${className} border rounded m-2 px-4 py-2  text-black`}
        />
    </div>
}   