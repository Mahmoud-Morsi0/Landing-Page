
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/User';
import { useNavigate } from 'react-router-dom';
import FetchData from '@/fetchData/fetchUsers';
import { Skeleton } from '@/components/ui/skeleton';

const Home = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: FetchData,
    });

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
    return (
        <div className='relative flex justify-center align-middle items-center flex-wrap gap-10 h-screen p-5 bg-[#181818]'>
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
    );
};


export default Home;

