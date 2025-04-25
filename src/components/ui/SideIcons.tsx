import { ReactElement } from "react"

interface SideIconProps {
    icon: ReactElement,
    text: string
    onClick?: ()=>void;
}

const defaultStyles = ' flex items-center flex-wrap '

export const SideIcons = (props: SideIconProps) => {
    return <div className=" sm:text-xl">
        <button className={defaultStyles} onClick={props.onClick}>
            <div className="mr-2">{props.icon}</div>
            <div className=""><p>{props.text}</p></div>
        </button>
    </div>

}