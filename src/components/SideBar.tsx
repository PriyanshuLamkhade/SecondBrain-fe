import { BrainIcon } from "../Icons/BrainIcon"
import { DocumentIcon } from "../Icons/DocumentIcon"
import { LinkIcon } from "../Icons/LinkIcon"
import { HashTagIcon } from "../Icons/TagIcon"

import { XIcon } from "../Icons/XIcon"
import { YoutubeIcon } from "../Icons/YoutubeIcon"
import { SideIcons } from "./ui/SideIcons"


export const SideBar = (porps:any) => {
    return <div className="h-full border-r pt-10  border-slate-400   sm:mb-3 flex flex-col   font-semibold items-center ">
        <div className="flex flex-wrap gap-2 text-3xl">
            <BrainIcon size="lg" />
            Second Brain
        </div>



        <div className="px-3 min-h-[20vmax] w-full mt-10 flex flex-col justify-around  sm:mt">
            <SideIcons icon={<HashTagIcon size="md" />} text="All" onClick={() => { porps.setTypeContent("all") }} />
            <SideIcons icon={<XIcon size="md" />} text="X" onClick={() => {  porps.setTypeContent("x") }} />
            <SideIcons icon={<YoutubeIcon size="md" />} text="YouTube" onClick={() => { porps.setTypeContent("youtube") }} />
            <SideIcons icon={<DocumentIcon size="md" />} text="Reddit" onClick={() => {  porps.setTypeContent("reddit") }} />
            <SideIcons icon={<LinkIcon size="md" />} text="Other" onClick={() => {  porps.setTypeContent("other") }} />


        </div>

        <button className="bg-red-500 p-3 rounded-lg mt-10 ml-3 self-start hover:bg-red-400  ">
            Log Out
        </button>
    </div>
}

