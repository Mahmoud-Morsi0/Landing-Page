import { useState } from "react"


interface HoverVideoProps {
    videoSrc:string,
    picSrc:string,
    altText:string
}

const HoverVideo:React.FC<HoverVideoProps>=({videoSrc,picSrc,altText})=>{
    const [isHovered,setIsHovered]=useState(false)

return(
    <div
    className={` bg-gradient-to-r from-[#242424] to-[#101010]   rounded-xl h-[765px] mt-4 w-full`}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)} 
    >
{isHovered?(
    <video className=" w-full h-[700px]" src={videoSrc} autoPlay muted loop ></video>
    ):(
        <img className="h-[570px] w-full " src={picSrc} alt={altText} />
    )}
    </div>
)
}
export default HoverVideo