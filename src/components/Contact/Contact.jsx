import Navbar from "../Navbar/Navbar"
import { useEffect, useContext } from "react";
import { ContextContainer } from "../../contextcontainer/ContextProvider";
function Contact() {

  const { path, setPath } = useContext(ContextContainer)
    
    useEffect(() => {
      setPath(window.location.pathname)
        if(path==="/contact")
        {
            window.document.title= "Contact - ISRO";
        }
    }, [path])

  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default Contact