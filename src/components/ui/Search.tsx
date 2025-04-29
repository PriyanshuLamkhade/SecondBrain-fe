interface SearchProps {
  placeholder: string;
  reference: React.RefObject<HTMLInputElement> | any;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Properly type onchange
}
export function Search({reference,placeholder,onchange}:SearchProps){
  return (
   
<form action="#">
  <div className="w-60 h-12 relative flex rounded-xl">
    <input
    
    required={false}
      ref={reference}
      className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
      id="address"
      type="text"
      onChange={onchange}
    />
    <label
      className="absolute top-1/2 translate-y-[-50%] bg-white left-4 
      px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm 
      peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm
       peer-valid:text-[#4070f4] duration-150 rounded-full"
      htmlFor="address"
    >
      {placeholder}</label>
  </div>
</form>

  )
}

