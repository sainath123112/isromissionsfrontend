import { useContext, useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import { ContextContainer } from '../../../contextcontainer/ContextProvider'

function SingleMission() {
    const { setPath, setIsSubmitted, setOnsubmitMessage, setMission,  findsinglemission} = useContext(ContextContainer)
    const {id} = useParams()
    const history = useNavigate()

    function getIsroMissions()
    {
      fetch(`/isro/api/missions/${id}`)
            .then((response)=> response.json())
            .then((data)=> setMission(data))
    }

    const handleDeleteRequest = async (id) =>
    {
      const response = await fetch(`/isro/api/delete-mission/${id}`,{
        method: "DELETE"
      })
      const data = await response.text()
      setOnsubmitMessage(data)

      history("/activities/missions-accomplished")
      setIsSubmitted(true)

    }
  
    useEffect(()=> {
        setPath(window.location.pathname)
      getIsroMissions();
    },[])

  return (
    <div className='flex flex-col pb-[100px]'>
        <Navbar></Navbar>
        <div className='bg-[#fffffe] py-[30px] flex flex-col items-center w-[50%] self-center'>
          <Link to="/activities/missions-accomplished" className='self-start'><i className="fa-solid fa-arrow-left ml-[30px] cursor-pointer text-[24px] hover:text-gray-500"></i></Link>
          <h1 className='text-[40px] font-[700] tracking-[1.8px] text-center'>{findsinglemission.mission_name}</h1>
          <div className='w-[100%] flex flex-col py-[20px] justify-around items-center'>
          <div className=' flex flex-col gap-[10px] text-[28px] font-[400] '>
            <div>
              <span className='text-[#E53170] font-[500]'>Launch Date: </span>
              <span>{findsinglemission.launch_date}</span>
            </div>
            <div>
              <span className='text-[#E53170] font-[500]'>Launch Vehicle: </span>
              <span>{findsinglemission.launch_vehicle}</span>
            </div>
            <div>
              <span className='text-[#E53170] font-[500]'>Orbit Type: </span>
              <span>{findsinglemission.orbit_type?findsinglemission.orbit_type:"N/A"}</span>
            </div>
            <div>
              <span className='text-[#E53170] font-[500]'>Application: </span>
              <span>{findsinglemission.application?findsinglemission.application:"N/A"}</span>
            </div>
            <div>
              <span className='text-[#E53170] font-[500]'>Remarks: </span>
              <span>{findsinglemission.remarks?findsinglemission.remarks:"N/A"}</span>
            </div>
          </div>
            <div className='flex mt-[40px] justify-around gap-[50px]'>
              <Link to="/activities/missions-accomplished/update-mission" className='text-[#FFFFFE] bg-green-500 text-[24px] px-[16px] py-[8px] font-[500] rounded-md cursor-pointer'>Edit</Link>
              <a className='text-[#FFFFFE] bg-red-500 text-[24px] px-[16px] py-[8px] font-[500] rounded-md cursor-pointer' onClick={() => handleDeleteRequest(findsinglemission.id)}>Delete</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleMission