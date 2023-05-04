import axios from 'axios'
export {putTokenInHTTPHeader}

function putTokenInHTTPHeader(token) {
    axios.defaults.headers.common = {Authorization: `Bearer ${token}`}
}
