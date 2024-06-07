import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../Protected/AuthProvider';
const Login = ({setAuth}) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorOccured, setErrorOcuured]=useState(false);
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
            username:userName,
            email,
            password
        }
        try{
            const response = await axios.post("http://localhost:8000/api/v1/users/login", data, {withCredentials: true})
            if(response.data.data.user.username === userName){
                console.log("inside");
                console.log(response.data)
                setAuth(true)
                navigate('/')
            }
            else{
                setAuth(false)
                setErrorOcuured(true)
            }
        }
        catch(error){
            console.error('Error logging in:', error);
        }
        if(errorOccured){
            navigate('/signup')
        }
        
    }

  return (
    <div>
        
        <div>
            
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{
                                            console.log(e.target.value)
                                            setEmail(e.target.value)
                                        }} 
                                        id="email" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="name@company.com" 
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input 
                                        type="text" 
                                        name="text" 
                                        value={userName}
                                        onChange={(e)=>{
                                            console.log(e.target.value)
                                            setUserName(e.target.value)
                                        }}
                                        id="password" 
                                        placeholder="UserName" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={password}
                                        onChange={(e)=>{
                                            console.log(e.target.value)
                                            setPassword(e.target.value)
                                        }}
                                        id="confirm-password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required=""
                                    />
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    
                                >
                                    Login
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    </div>
  )
}

export default Login