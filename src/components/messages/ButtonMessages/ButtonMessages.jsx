import { ContextContainer } from "../../../contextcontainer/ContextProvider"
import "./ButtonMessages.css"
import React, { useContext, useEffect, useState } from 'react'

function ButtonMessages() {
    const { onSubmitMessage, isSubmitted, setIsSubmitted} = useContext(ContextContainer)
    const [ fontColor, setFontColor ] = useState("")

    useEffect(()=>{
        if(onSubmitMessage.includes("Added"))
        {
            setFontColor("bg-green-500")
        }
        else if(onSubmitMessage.includes("Deleted"))
        {
            setFontColor("bg-red-500")
        }
        else if(onSubmitMessage.includes("Updated"))
        {
            setFontColor("bg-[#E53170]")
        }
        else
        {
            setFontColor("bg-[#FF0000]")
        }
        const timer = setTimeout(()=>{
            setIsSubmitted(false)
        }, 6000);
        return ()=> clearTimeout(timer)
    })
  return (
    isSubmitted?<div className="buttonmessages fixed bg-[#FFFFFE] bottom-[30px] right-0">
        <h1 className="text-[24px] mx-[20px] my-[10px]">{onSubmitMessage}</h1>
        <div className={`timebar ${fontColor}`}></div>
    </div>:null
  )
}

export default ButtonMessages