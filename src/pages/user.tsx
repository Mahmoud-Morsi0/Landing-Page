import { Skeleton } from '@/components/ui/skeleton';
import FetchData from '@/fetchData/fetchUsers';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users', id],
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

    if (isError) return <h2>Error: {error.message}</h2>;

    return (
        <div className='flex justify-center align-middle items-center h-screen '>
            <div
                className='bg-gradient-to-r from-[#202020] to-[#404040] min-h-3/6 py-20 w-1/3 rounded-xl text-white text-center'
            >
                <h1 className='text-3xl text-[#a3d36c] font-semibold mb-3'>{data.name}</h1>
                <h2>User Name :  {data.username}</h2>
                <h2>Email : {data.email}</h2>
                <h2>Phone :  {data.phone}</h2>
                <h2>Website :  {data.website}</h2>
                <h2>Company :  {data.company.name}</h2>
                <h2>Address "Street" :  {data.address.street}</h2>
                <h2>Address "Suite" :  {data.address.suite}</h2>
                <h2>Address "City" :  {data.address.city}</h2>
                <h2>Address "ZipCode" :  {data.address.zipcode}</h2>
                <h2>Address "geo-lat" :  {data.address.geo.lat}</h2>
                <h2>Address "geo-lng" :  {data.address.geo.lng}</h2>
            </div>
            <div></div>
        </div>
    )
}

export default User