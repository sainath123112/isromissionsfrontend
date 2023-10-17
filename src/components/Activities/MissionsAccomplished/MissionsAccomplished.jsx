import "./MissionsAccomplished.css"
import { useContext, useEffect } from "react"
import Navbar from "../../Navbar/Navbar"
import { ContextContainer } from "../../../contextcontainer/ContextProvider"
import MissionsList from "./MissionsList"
import { Link } from "react-router-dom"
import ButtonMessages from "../../messages/ButtonMessages/ButtonMessages"

function MissionsAccomplished() {
  const { setPath } = useContext(ContextContainer)
  useEffect(()=> {
    setPath(window.location.pathname)
    window.document.title= "Missions Accomplished - ISRO";
  },[])

  return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-[100%] pb-[50px] px-[100px]">
              <div className="text-[#FFFFFE] text-[20px] tracking-[1.6px]">/ <span>Activities</span> / <span className="text-[#F4730E] font-[500]">Missions Accomplished</span></div>
              <Link to="/activities/missions-accomplished/add-mission" className="bg-[#0589D4] rounded-[6px] text-[18px] px-[14px] py-[8px] font-[600] text-[#FFFFFE] tracking-[1.6px]">Add Mission</Link>
            </div>
            <MissionsList></MissionsList>
              <ButtonMessages></ButtonMessages>
        </div>
    </div>
  )
}

export default MissionsAccomplished