
import '../App.css'
import Hero from '../components/hero';

function LandingPage() {
    const CLINTS = ["Netflix",
        "Spotify",
        "Airbnb",
        "Tesla",
        "Anghamy",
        "Facebook",
        "X",
        "LSC",
        "Google",
        "IBM",
        
    ]


    return (
        <>
            <Hero></Hero>


            <div className=' p-32 bg-[#b3b2b2] text-black'>
                <div className="clint-title  mx-auto text-center">
                    <h2 className='text-6xl text-[#81fc5b] font-semibold'>Folks at these Awesome Companies are Already Using Startup Framework</h2>
                </div>
                <div className="clints flex flex-wrap justify-center align-middle items-center gap-x-4 gap-y-1 mt-10">
                    {CLINTS.map((clint) => {
                        return <div
                        key={clint} className='text-[#1c1c1c] text-2xl hover:text-[#81fc5b]  p-4 w-fit text-center font-semibold '>{clint}</div>
                    })}
                </div>

            </div>
            <div className="footer h-12 w-screen bg-[#242424] text-center text-3xl">
                <h3 className='logo hover:scale-110  list-item transition-all duration-150 ease-linear hover:text-[#81fc5b] '>...Logo...</h3>
            </div>
        </>
    )
}

export default LandingPage