import { createStore } from "redux";
import {putTokenInHTTPHeader} from '../Services/apiToken'

// InitialState of Redux

const initialState = {

    logIn : false,
    token: null,
    userProfile: null,
    presentState: '',
    loading: false,
    error: false
}

// Actions creators for modification of the state

const actionLoading = (payload) => ({
    type: 'Loading',
    payload: payload
})

const actionLogInPass = (payload) => ({
    type: 'LogInPass',
    payload: payload
})

const actionLogInFail = (payload) => ({
    type: 'LogInFail',
    payload: payload
})

const actionGetUserProfile = (payload) => ({
    type: 'GetUserProfile',
    payload: payload
})

const actionGetUserProfileFail = () => ({
    type: 'GetUserProfileFail'
})

const actionUpdateUserProfile = (payload) => ({
    type: 'UpdateUserProfile',
    payload: payload
})

const actionUpdateUserProfileFail = () => ({
    type: 'UpdateUserProfileFail'
})

const actionLogOut = () => ({
    type: 'LogOut'
})

// The reducer of Redux to put the actions creators

function reducer(state , action){

    if(action.type ==='Loading'){

        return {
            ...state,
            presentState: 'loading',
            loading: action.payload
        }
    }
    if(action.type ==='LogInPass'){

        putTokenInHTTPHeader(action.payload)
        return {
            ...state,
            logIn:true,
            token: action.payload,
            presentState: 'online',
            loading: true      
        }
    }
    if(action.type ==='LogInFail'){
        
        return {
            ...state,
            error:true,
            loading:false,
            presentState: 'FailToLogIn' 
        }
    }
    if(action.type ==='GetUserProfile'){

        return {
            ...state,
            userProfile: action.payload.user,
            loading: false
        }
    }
    if(action.type ==='GetUserProfileFail'){

        return {

        }
    }
    if(action.type ==='UpdateUserProfile'){

        return {
            
        }
    }
    if(action.type ==='UpdateUserProfileFail'){

        return {

        }
    }
    if(action.type ==='LogOut'){

        return initialState
    }
    else {
        return state
    }
}

// The store of Redux to assemble state, actions creators and reducer

const store = createStore(reducer, initialState)

export {initialState}
export {store}
export {actionLoading,actionLogInPass,actionLogInFail,actionGetUserProfile,actionGetUserProfileFail}
export {actionUpdateUserProfile,actionUpdateUserProfileFail,actionLogOut}