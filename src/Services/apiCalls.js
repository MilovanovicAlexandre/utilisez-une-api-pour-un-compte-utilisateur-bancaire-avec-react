import axios from 'axios'
export {getTokenLogin}
export {getUserProfile}
export {updateUserProfile}

async function getTokenLogin(emailAddress,password) {

    const response= await axios.post('http://localhost:3001/api/v1/user/login',
    {email: emailAddress , password: password})
    return response.data.body.token
}

async function getUserProfile() {
    
    const response= await axios.post('http://localhost:3001/api/v1/user/profile')
    return response.data.body 
}

async function updateUserProfile(firstName, lastName) {
    
    const response= await axios.put('http://localhost:3001/api/v1/user/profile',
    {firstName, lastName})
    return response    
}