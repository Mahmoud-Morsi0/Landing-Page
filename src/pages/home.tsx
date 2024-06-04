import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
        const [data, setData] = useState([])
    const getAll= async ()=>{
       const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
        setData(data)
    }

    useEffect(()=>{
        getAll()
    },[])
        
  return (
    <div>
         <div className=' relative flex justify-center align-middle items-center flex-wrap gap-10 h-screen p-5 bg-[#181818]'>
                {data?.map(( data ) => {
                    return (
                        <div className='rounded w-80 cursor-pointer text-center h-40 bg-[#c3c3c3]  ' key={data.id} >
                            <div >
                                <div className='text-3xl text-black'>{data.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Home