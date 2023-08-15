import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth';


function RegisterPage() {
        
    const { register, handleSubmit } = useForm();


    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
          <form onSubmit={handleSubmit(async (values) => {
            console.log(values);
            const res= await registerRequest(values)
            console.log(res);
          })}>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="username"
              className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-2'
            />
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-2'
            />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-2'
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>

    )
  }
  


export default RegisterPage