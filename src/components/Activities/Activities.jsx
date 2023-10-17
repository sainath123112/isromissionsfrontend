import "./Activities.css"
import ActivitiesList from "./ActivitiesList";
import Navbar from "../Navbar/Navbar"
import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { ContextContainer } from "../../contextcontainer/ContextProvider";
function Activities() {
  const { path, setPath } = useContext(ContextContainer)
  const [redirectTo, setRedirectTo] = useState(null);
    
    useEffect(() => {
      setPath(window.location.pathname)
        if(path==="/activities")
        {
            window.document.title= "Activities - ISRO";
        }
    }, [path])

    function buttonClicked(id)
    {
      if(id===1)
      {
        setRedirectTo("/activities/missions-accomplished")
      }
      else if (id===2)
      {
        setRedirectTo("/activities/upcoming-missions")
      }
      else if (id===3)
      {
        setRedirectTo("/activities/launchers-used")
      }
      else
      {
        setRedirectTo("/activities/satellites-launched")
      }
    }

    if (redirectTo) {
      return <Navigate to={redirectTo} replace={true}></Navigate>;
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-wrap px-[153px] ml-[28px] pt-[30px] pb-[100px] gap-[72px]">
        {
          ActivitiesList.map((activity)=>{
           return(<div key={activity.id} className="flex flex-col items-center py-[30px] h-[412px] w-[330px] bg-[#FFFFFE] rounded-[25px] border-solid border-[2px] border-[#E53170] ">
            <img className="w-[187px] h-[187px] rounded-[50%] border-solid border-[2px] border-[#E53170]" src={activity.imgURL} alt="Activities"></img>
            <h1 className="text-[36px] w-[250px] font-[700] mt-[8px] tracking-[1.8px] text-center leading-tight">{activity.title}</h1>
            <div className="bg-[#f4730e] px-[28px] py-[8px] rounded-lg mt-[16px] cursor-pointer">
              <i className="fa-solid fa-forward-fast text-[#FFFFFE] text-[26px]" onClick={()=> buttonClicked(activity.id)}></i>
            </div>
           </div>)
          })
        }
      </div>
    </div>
  )
}

export default Activities