import "./Home.css"
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextContainer } from "../../contextcontainer/ContextProvider";

function Home()
{
    const { path, setPath } = useContext(ContextContainer)
    
    useEffect(() => {
        setPath(window.location.pathname)
        if(path==="/")
        {
            window.document.title= "Home - ISRO";
        }
    }, [path])
    return (

        <div className="Home">
            <Navbar></Navbar>
            <div className="px-[120px] py-[10px] flex">
                <div>
                    <div>
                        <h1 className="text-[#0589D4] text-[55px] h-[55px] font-[600] flex items-center">Explore Space With</h1>
                        <h1 className="text-[#F4730E] text-[220px] h-[220px] font-[600] tracking-[18px] flex items-center">ISRO</h1>
                    </div>
                    <div className="text-[#A7A9BE] w-[650px] text-justify">
                        Welcome to ISRO’s Official website, your portal to India’s 
                        remarkable advancements in space exploration and technology. 
                        Explore our missions, discoveries, and our unwavering 
                        commitment to pushing the boundaries of human knowledge in the cosmos. 
                        Join us on our journey as we continue to inspire and innovate for a brighter future beyond our planet...
                    </div>
                    <div className="mt-[26px]">
                        <Link to="/activities" className="bg-[#0589D4] rounded-[6px] text-[32px] px-[24px] py-[8px] font-[600] text-[#FFFFFE] tracking-[1.6px]">Explore!</Link>
                    </div>
                </div>
                <div className="Home-img ml-[100px]">
                    <img className="w-[517px] h-[439px]" src="https://isroimagesbucket.s3.us-east-2.amazonaws.com/isroassertimages/pslv_c29_isro.jpg" alt="Isro rocket"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;