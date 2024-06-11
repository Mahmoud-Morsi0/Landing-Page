
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/User';
import { useNavigate } from 'react-router-dom';
import FetchData from '@/fetchData/fetchUsers';
import { Skeleton } from '@/components/ui/skeleton';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import { RootState, set, setUsers } from '@/store/store';
import { useEffect } from 'react';
import { CgProfile } from "react-icons/cg";

const Home = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: FetchData,
    });

    const users = useSelector((state: RootState) => state.user);
    const usersCounter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setUsers(data));
            dispatch(set(data.length));
        }
    }, [data, dispatch]);

    if (isLoading) return (
        <>
            <div className='flex justify-center align-middle items-center h-screen '>
                <div>
                    <Skeleton className="w-[70px] h-[70px] rounded-full bg-[#404040]" />
                </div>
            </div>
        </>
    )

    if (isError) return <h1>Error: {error.message}</h1>;
    const handleNavigateToUser = (id: number) => {
        navigate(`user/${id}`)

    }
    const handleNavigateToProfile = () => {
        navigate('/home/profile')
    }
    return (
        <>
            <div className='flex justify-center items-start gap-5 p-5'>
                <div className='py-10 px-5 bg-[#181818] flex flex-col justify-between w-[80px] align-middle items-center h-screen  rounded-lg'>
                    <div>
                        <h2 >Users:<span className='text-[#81fc5b]'>{usersCounter.value}</span></h2>
                    </div>
                    <div
                        onClick={handleNavigateToProfile}
                    >
                        <CgProfile className='text-4xl cursor-pointer' />
                    </div>

                </div>
                <div className='relative flex justify-center items-center flex-wrap gap-5 min-h-screen p-5 rounded-lg bg-[#181818]'>

                    {data?.map((user: User) => (
                        <div
                            className='text-white w-80 cursor-pointer text-center min-h-80 line-clamp-4 spin-in bg-gradient-to-r from-[#202020] to-[#404040] rounded-xl'
                            onClick={() => handleNavigateToUser(user.id)}
                            key={user.id}
                        >
                            <div>
                                <div className='text-3xl text-[#81fc5b] my-7'>{user.name}</div>
                                <div className='text-xl text-white my-3'>{user.username}</div>
                                <div className='text-xl text-white'>{user.phone}</div>
                                <div className='text-xl text-white my-3'>{user.email}</div>
                                <div className='text-xl text-white'>{user.website}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-gradient-to-tr from-green-200 via-green-500 to-green-100 h-40'>

            </div>

        </>
    );
};


export default Home;

