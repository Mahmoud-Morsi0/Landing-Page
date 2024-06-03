
import { useEffect, useState } from 'react';
import "../App.css"
import HoverVideo from '../components/hoverVideo';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [isTitleLoaded, setIsTitleLoaded] = useState(false);
    const [isParagraphLoaded, setIsParagraphLoaded] = useState(false);
    const [areButtonsLoaded, setAreButtonsLoaded] = useState(false);

    const navigate=useNavigate()
    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setIsTitleLoaded(true);
        }, 500);

        const paragraphTimer = setTimeout(() => {
            setIsParagraphLoaded(true);
        }, 1000);

        const buttonsTimer = setTimeout(() => {
            setAreButtonsLoaded(true);
        }, 1500);
        return () => {
            clearTimeout(titleTimer);
            clearTimeout(paragraphTimer);
            clearTimeout(buttonsTimer);
        };
    }, []);


const navigateToLogin=()=>{
navigate("auth/login")
}
const navigateToSignup=()=>{
navigate("auth/signup")
}


    return (
        <>
            <main className='home h-[800px] flex justify-start align-middle items-start gap-2 container ps-4 pe-0 '>
                <nav className='flex justify-start align-middle items-center bg-[#242424] rounded-xl w-[800px] px-32 h-16 mt-4'>
                    <div className='logo text-white mr-44 text-4xl p-5 hover:text-[#abd665]'>Logo</div>
                    <div className="links">
                        <ul className='flex justify-between align-middle items-center '>
                            <li className=' list-item text-white p-5 hover:text-[#abd665]'><a className='' href="">Pricing</a></li>
                            <li className=' list-item text-white p-5 hover:text-[#abd665] '><a className='' href="">About</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='w-1/3 h-full ms-auto'>
                    <HoverVideo
                        videoSrc="../public/Grey And White Collage Fashion Mobile Video.mp4"
                        picSrc='../public/Black And White Modern Typographic Simple Virus Apparel Logo.png'
                        altText='Video'
                    >
                    </HoverVideo>
                </div>

                <div className="text absolute top-24 left-4 overflow-hidden ps-16 pt-32 bg-[#242424] rounded-xl w-[800px] h-[685px]">
                    <h2 className={`title mb-5 text-4xl w-[300px] ${isTitleLoaded ? 'opacity-1 transition-all duration-500 ease-out hover:ease-in' : 'opacity-0'} `}>Great tool to boost your <span className='logo text-6xl text-[#abd665]'>startup</span> </h2>
                    <p className={`w-[500px] text-gray-300  ${isParagraphLoaded ? 'opacity-1 transition-all translate-x-0 duration-500 ease-out hover:ease-in' : 'opacity-0 translate-x-96'} `}>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!</p>
                    <div className={`btn w-72 mt-10 flex justify-between align-middle items-center  ${areButtonsLoaded ? 'opacity-1 transition-all duration-500 ease-out' : 'opacity-0 rotate-90'}`}>
                        <button 
                        onClick={navigateToLogin}
                        className='bg-[#abd665] text-black w-32 h-10 rounded-2xl hover:bg-[#E4E2DD]'
                        >Get Started</button>
                        <button
                        onClick={navigateToSignup} 
                        className='bg-[#E4E2DD] text-black w-32 h-10 rounded-2xl hover:bg-[#abd665] hover:text-black'
                        >Sign Up</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero
