import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./components/Home/Home"
import Activities from './components/Activities/Activities'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import MissionsAccomplished from './components/Activities/MissionsAccomplished/MissionsAccomplished'
import UpcomingMissions from './components/Activities/UpcomingMissions/UpcomingMissions'
import LaunchersUsed from './components/Activities/LaunchersUsed/LaunchersUsed'
import SatellitesLaunched from './components/Activities/SatellitesLaunched/SatellitesLaunched'
import SingleMission from './components/Activities/MissionsAccomplished/SingleMission'
import AddMission from './components/Activities/MissionsAccomplished/AddMission'
import UpdateMission from './components/Activities/MissionsAccomplished/UpdateMission'


function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/activities",
    element: <Activities></Activities>
  },
  {
    path: "/activities/missions-accomplished",
    element: <MissionsAccomplished></MissionsAccomplished>
  },
  {
    path: "/activities/upcoming-missions",
    element: <UpcomingMissions></UpcomingMissions>
  },
  {
    path: "/activities/launchers-used",
    element: <LaunchersUsed></LaunchersUsed>
  },
  {
    path: "/activities/satellites-launched",
    element: <SatellitesLaunched></SatellitesLaunched>
  },
  {
    path: "/Contact",
    element: <Contact></Contact>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/activities/missions-accomplished/:id",
    element: <SingleMission></SingleMission>
  },
  {
    path: "/activities/missions-accomplished/add-mission",
    element: <AddMission></AddMission>
  },
  {
    path: "/activities/missions-accomplished/update-mission",
    element: <UpdateMission></UpdateMission>
  }


])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
