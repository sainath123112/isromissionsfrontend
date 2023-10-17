
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../../Navbar/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { ContextContainer } from "../../../contextcontainer/ContextProvider";

function UpdateMission() {

    const { setOnsubmitMessage, setIsSubmitted, findsinglemission} = useContext(ContextContainer)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigator = useNavigate()
    function onSubmit(data)
    {
        console.log(data)
        fetch(`/isro/api/update-mission/${findsinglemission.id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.text())
            .then((data)=> setOnsubmitMessage(data))
            .catch((error) => {
                console.error('Error making POST request:', error);
                // Handle errors
              });
        navigator("/activities/missions-accomplished")
        setIsSubmitted(true)

    } 
    

  return (
    <div className='UpdateMission flex flex-col'>
        <Navbar></Navbar>
        <div className='bg-[#FFFFFE] rounded-md w-[50%] self-center flex flex-col items-center justify-center py-[20px]'>
            <Link to="/activities/missions-accomplished" className='self-start'><i className="fa-solid fa-arrow-left ml-[30px] cursor-pointer text-[24px] hover:text-gray-500"></i></Link>
            <h1 className='text-[36px] font-[700] tracking-[1.8px]'>Update Mission</h1>
            <form className="flex mt-[20px] flex-col gap-[16px]" onSubmit={handleSubmit(onSubmit)}>
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="text" placeholder="Mission Name" defaultValue={findsinglemission.mission_name} {...register("mission_name", {required: true})} />
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="date" placeholder="Launch Date e.g: 01-Jan-2023" defaultValue={findsinglemission.launch_date} {...register("launch_date", {required: true})} />
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="text" placeholder="Launch Vehicle" defaultValue={findsinglemission.launch_vehicle} {...register("launch_vehicle", {required: true})} />
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="text" placeholder="Orbit Type" defaultValue={findsinglemission.orbit_type} {...register("orbit_type", {})} />
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="text" placeholder="Application" defaultValue={findsinglemission.application} {...register("application", {})} />
                <input className='w-[250px] px-[8px] py-[5px] border-[1px] rounded-md border-solid border-gray-500' type="text" placeholder="Remarks" defaultValue={findsinglemission.remarks} {...register("remarks", {})} />

                <input className='text-white self-center mb-[30px] text-[24px] bg-[#E53170] rounded-md cursor-pointer w-[100px]' type="submit" />
            </form>
        </div>

    </div>
  )
}

export default UpdateMission