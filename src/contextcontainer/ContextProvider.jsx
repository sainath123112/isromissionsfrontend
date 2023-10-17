import { createContext, useState } from 'react'

export const ContextContainer = createContext(undefined);

function ContextProvider({children}) {

  const [path, setPath] = useState("");
  const [missions, setMissions] = useState([]);
  const [onSubmitMessage, setOnsubmitMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ findsinglemission, setMission ] = useState({})   



  const contextValue = {
    path: path,
    setPath: setPath,
    missions: missions,
    setMissions: setMissions,
    onSubmitMessage: onSubmitMessage,
    setOnsubmitMessage: setOnsubmitMessage,
    isSubmitted: isSubmitted,
    setIsSubmitted: setIsSubmitted,
    findsinglemission: findsinglemission,
    setMission: setMission

}

  return (
    <ContextContainer.Provider value ={contextValue}>
        {children}
    </ContextContainer.Provider>
  )
}

export default ContextProvider