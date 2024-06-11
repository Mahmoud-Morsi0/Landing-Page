import { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { CiHome } from "react-icons/ci";


function Profile() {
    const fileInputRef = useRef(null);
    const [profileImg, setProfileImg] = useState("../../public/Man Avatar.png")
    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <div className='flex justify-center align-middle items-center gap-5 p-5 bg-black'>
                <div className='w-1/3 h-[950px] bg-[#252525] rounded-lg flex flex-col justify-start align-middle items-center'>
                    <div className="text mt-5">
                        <CiHome
                        className="text-3xl cursor-pointer" 
                        onClick={() => window.history.back()}
                        />
                    </div>
                    <div className='img-icon-hover  relative profile-img w-[16rem] h-[16rem] bg-[#303030] shadow-inner shadow-[#606060] rounded-full mt-10'>
                        <img src={profileImg} alt="" className=" rounded-full " />
                        <BiImageAdd
                            className='img-icon'
                            title="Upload an image" // Tooltip text
                            onClick={handleClick}
                        />
                        <input
                            type="file"
                            className="hidden-inp"
                            ref={fileInputRef}
                            onChange={() => handleFileChange(event)}
                        />
                    </div>
                    <div className='ps-10 pe-5 py-10'>
                        <h2 className='font-semibold'>Name</h2>
                        <h2 className='text-[#9c9c9c] mb-5'>Title</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dicta.</p>
                    </div>
                    <div className='text-sm bg-[#303030] shadow-inner cursor-pointer shadow-[#606060] rounded-lg flex justify-center items-center hover:bg-[#454545] border-2 border-[#fff] w-2/3 h-10'>
                        Edit profile
                    </div>
                </div>
                <div className='w-2/3 h-[950px] bg-gradient-to-b from-[#303030] to-[#161616] rounded-lg text-center p-10'>
                    <h1>Personal Data</h1>
                </div>
            </div>
        </div>
    );
}

export default Profile;
