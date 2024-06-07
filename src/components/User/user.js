
import axios from "axios"
import Cookies from "js-cookie";

const getUser = async() =>{    
    const response = await axios.get('http://localhost:8000/api/v1/users/getUser', {withCredentials: true})
    console.log(response.data.data)
    return response.data.data
}

const getAllAccepted = async()=>{
    const response = await axios.get(`http://localhost:8000/api/v1/userCodes/allAccepted`, {withCredentials: true })

    console.log("res:----", response.data)
    return response.data.data
}



export {getUser, getAllAccepted}