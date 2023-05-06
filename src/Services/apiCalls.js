import axios from 'axios'
export {getTokenLogin}
export {getUserProfile}
export {updateUserProfile}

async function getTokenLogin(emailAddress,password) {

    const response= await axios.post('http://localhost:3001/api/v1/user/login',
    {email: emailAddress , password: password},{headers: {"Content-type": "application/json"}})
    return response.data.body.token
}

async function getUserProfile(token) {
    
    // In axios, for request post there is 3 arguments in the fonction: URL to reach, data to send, headers
    // Once connected, to retrieve the data (first name and last name) from the connected user, with 
    // function 'getUserProfile' we need to indicate the token of the user into the header of 
    //the post's resquest  
    const response= await axios.post('http://localhost:3001/api/v1/user/profile',{},
    {headers: {"Content-Type": "application/json",Authorization: `Bearer ${token}`}})
    return response.data.body 
}

async function updateUserProfile(token,entryFirstName, entryLastName) {
    
    const response= await axios.put('http://localhost:3001/api/v1/user/profile',
    {firstName: entryFirstName, lastName: entryLastName},
    {headers: {"Content-Type": "application/json",Authorization: `Bearer ${token}`}}
    )
    return response    
}