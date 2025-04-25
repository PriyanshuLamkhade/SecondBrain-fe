
import { useState } from 'react'
import { Body } from '../components/Body'

import { SideBar } from '../components/SideBar'




export function Dashboard() {

let [typeContent, setTypeContent] = useState("all")
  return (
    <>
      <div className='w-[20vmax] bg-slate-100 shadow-md'>
        <SideBar typeContent={typeContent}  setTypeContent={setTypeContent} /></div>
      <div className='pb-10  bg-slate-300 w-full '>
        <Body typeContent={typeContent}  />
      </div>
    </>



  )
}



