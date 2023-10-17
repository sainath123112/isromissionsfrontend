import { useContext, useEffect, useState } from 'react'
import { ContextContainer } from '../../../contextcontainer/ContextProvider';
import { Link } from 'react-router-dom';

function MissionsList() {

    const { missions, setMissions } = useContext(ContextContainer)
    function getIsroMissions()
    {
      fetch("/isro/api/missions")
            .then((response)=> response.json())
            .then((data)=> setMissions(data.sort((a, b) => {
                const dateA = new Date(a.launch_date);
                const dateB = new Date(b.launch_date);
                return dateA - dateB;
              })))
    }
  
    useEffect(()=> {
      getIsroMissions();

    },[])


  return (
    <div className="px-[20px] w-[90%] flex justify-center pb-[50px]">
        {missions.length !== 0?<table className="text-[#E53170] w-[100%] text-center">
            <thead>
                <tr className="text-[18px]">
                    <th className=" py-[8px] border-r-[0.25px] border-[#FFFFFE]">SNo.</th>
                    <th className="border-r-[0.25px] border-[#FFFFFE]">Mission Name</th>
                    <th className="w-[130px] border-r-[0.25px] border-[#FFFFFE]">Launch Date</th>
                    <th className="border-r-[0.25px] border-[#FFFFFE]">Launch Vehicle</th>
                    <th className="border-r-[0.25px] border-[#FFFFFE]">Orbit Type</th>
                    <th className="border-r-[0.25px] border-[#FFFFFE]">Application</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                {
                    missions.map((mission, indx)=> {
                        return ( <tr key={mission.id} className="text-white border-t-[0.25px] border-[#FFFFFE] text-[16px]"> 
                                    <td className="py-[8px] border-r-[0.25px] border-[#FFFFFE]">{indx+1}</td>
                                    <td className="border-r-[0.25px] border-[#FFFFFE]"><Link to={`/activities/missions-accomplished/${mission.id}`}>{mission.mission_name}</Link></td>
                                    <td className="border-r-[0.25px] border-[#FFFFFE]">{mission.launch_date.split('-')[1]}-{mission.launch_date.split('-')[2]}-{mission.launch_date.split('-')[0]}</td>
                                    <td className="border-r-[0.25px] border-[#FFFFFE]">{mission.launch_vehicle}</td>
                                    <td className="border-r-[0.25px] border-[#FFFFFE]">{mission.orbit_type}</td>
                                    <td className="border-r-[0.25px] border-[#FFFFFE]">{mission.application}</td>
                                    <td>{mission.remarks}</td>  
                                </tr>)
                    })
                }
            </tbody>
        </table>: <div className="bg-[#FFFFFE] p-[50px] rounded-md">
                <h1>OOPS..! No Missions to Display..!</h1>
              </div>
        }
        
    </div>
  )
}

export default MissionsList