import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useEffect, useContext } from 'react';
import { ContextContainer } from "../../contextcontainer/ContextProvider"


function Navbar()
{    
    const {path} = useContext(ContextContainer)
    
    const homepath = "/";
    const contactpath = "/contact";
    
    return(
        <div className="Navbar flex flex-row py-[30px] px-[77px] items-center justify-between">
            <div className="Navbar-logo w-[96px] h-[94px]">
                <img src="https://isroimagesbucket.s3.us-east-2.amazonaws.com/isroassertimages/Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO_logo"></img>
            </div>
            <div className="Navbar-links flex items-center text-[26px] w-[450px] font-[700] justify-between">
                <Link to="/" className= {`${path===homepath?"text-[#F4730E] ":"text-[#FFFFFE] "}tracking-[1.6px] cursor-pointer`}>Home</Link>
                <Link to="/activities" className={`${path.includes('activities')?"text-[#F4730E] ":"text-[#FFFFFE] "}tracking-[1.6px] cursor-pointer`}>Activities</Link>
                <Link to="/contact" className={`${path===contactpath?"text-[#F4730E] ":"text-[#FFFFFE] "}tracking-[1.6px] cursor-pointer`}>Contact</Link>
            </div>
            <div className="Navbar-login flex items-center font-[700] tracking-[1.6px] text-[#FFFFFE] cursor-pointer mr-[72px] text-[26px]">
                <Link to="/login">Login/Register</Link>
            </div>
        </div>
    )
}

export default Navbar;