import { createStore } from "redux";

// InitialState of Redux

const initialState = {

    logIn : false,
    token: null,
    firstName: null,
    lastName: null,
    error: false
}

// Actions creators for modification of the state

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

const actionGetUserProfileFail = (payload) => ({
    type: 'GetUserProfileFail',
    payload: payload
})

const actionUpdateUserProfile = (payload) => ({
    type: 'UpdateUserProfile',
    payload: payload
})

const actionUpdateUserProfileFail = (payload) => ({
    type: 'UpdateUserProfileFail',
    payload: payload
})

const actionLogInPassLocalStorage = (payload) => ({
    type: 'LogInPassLocalStorage',
    payload:payload
})

const actionLogOut = (payload) => ({
    type: 'LogOut',
    payload: payload
})

// The reducer of Redux to put the actions creators

function reducer(state = initialState, action){

    if(action.type ==='LogInPass'){

        return {
            ...state,
            logIn:true,
            token: action.payload
        }
    }
    if(action.type ==='LogInFail'){
        
        return {
            ...state,
            error:true 
        }
    }
    if(action.type ==='GetUserProfile'){

        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        }
    }
    if(action.type ==='GetUserProfileFail'){

        return {
            ...state,
            error:true
        }
        
    }
    if(action.type ==='UpdateUserProfile'){

        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            error:false
        }
    }
    if(action.type ==='UpdateUserProfileFail'){

        return {
            ...state,
            error:true
        }
    }
    if(action.type ==='LogOut'){

        return initialState
    }
    if(action.type === 'LogInPassLocalStorage'){

        return{
            ...initialState,
            logIn:true,
            token: action.payload
        }
    }
    else {
        return state
    }
}

// Connection of Redux store to the add-on Redux Devtools, we retreive the Devtools and if they
// exist we execute the function of Devtools

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// The store of Redux to assemble state, actions creators and reducer

const store = createStore(reducer,reduxDevtools)

// Exports

export {initialState}
export {store}
export {actionLogInPass,actionLogInFail,actionGetUserProfile,actionGetUserProfileFail}
export {actionUpdateUserProfile,actionUpdateUserProfileFail,actionLogInPassLocalStorage,actionLogOut}