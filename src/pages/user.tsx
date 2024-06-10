import { Skeleton } from '@/components/ui/skeleton';
import FetchData from '@/fetchData/fetchUsers';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '@/store/store';

function User() {
    const { id } = useParams()

    const { isLoading, isError, error } = useQuery({
        queryKey: ['users', id],
        queryFn: FetchData,
    });

    
    const users=useSelector((state:RootState)=>state.user)
    console.log('Users from User => ',users)

    const selectedUser=users.filter(user=>{
        return user.id===Number(id)
    })
    console.log(selectedUser)

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
                <h1 className='text-5xl text-[#81fc5b] font-semibold mb-3'>{selectedUser[0].name}</h1>
                <h2>User Name :  {selectedUser[0].username}</h2>
                <h2>Email : {selectedUser[0].email}</h2>
                <h2>Phone :  {selectedUser[0].phone}</h2>
                <h2>Website :  {selectedUser[0].website}</h2>
                <h2>Company :  {selectedUser[0].company.name}</h2>
                <h2>Address "Street" :  {selectedUser[0].address.street}</h2>
                <h2>Address "Suite" :  {selectedUser[0].address.suite}</h2>
                <h2>Address "City" :  {selectedUser[0].address.city}</h2>
                <h2>Address "ZipCode" :  {selectedUser[0].address.zipcode}</h2>
                <h2>Address "geo-lat" :  {selectedUser[0].address.geo.lat}</h2>
                <h2>Address "geo-lng" :  {selectedUser[0].address.geo.lng}</h2>
            </div>
            <div></div>
        </div>
    )
}

export default User