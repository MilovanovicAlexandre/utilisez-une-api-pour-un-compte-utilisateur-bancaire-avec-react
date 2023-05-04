function recordOfTokenInLocalStorage(token,rememberMe) {

    if(rememberMe === true){
        localStorage.setItem('token',token)
    }
    else {
        sessionStorage.setItem('token',token)
    }
}

export {recordOfTokenInLocalStorage}