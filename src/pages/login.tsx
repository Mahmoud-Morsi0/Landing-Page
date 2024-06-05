import { InputForm } from '../components/ui/loginForm';

function Login() {
  return ( 
    <div className='container flex gap-5 justify-center align-middle items-center h-screen'>
        <div className='bg-[#242424] w-2/3 p-20 rounded-lg'>
        <InputForm/>
        </div>
        
    </div>
  )
}

export default Login   