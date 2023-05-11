import React from 'react'
import Accounts from '../../Components/Accounts/accounts.jsx'
import './user.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../../Services/apiCalls.js'
import { actionUpdateUserProfile } from '../../Redux/store.js' 
import { actionUpdateUserProfileFail } from '../../Redux/store.js'

function User() {

    const stateRetrieved = useSelector((state) => state)
    const [editName,setEditName] = useState(false)
    const [entryFirstName,setEntryFirstName] = useState('')
    const [entryLastName,setEntryLastName] = useState('')
    const dispatch = useDispatch();

    function openMoficationDisplayOfProfile() {
        setEditName(true)
    }

    function openDisplayOfProfile(){
        setEditName(false)
    }

    function recordingDataProfile() {

        const regexNames=/^[a-zA-Z-]+$/;

        //console.log('regexNames.test(entryFirstName)= '+regexNames.test(entryFirstName))
        //console.log('regexNames.test(entryLastName)= '+regexNames.test(entryLastName))

        let namesareValid = (regexNames.test(entryFirstName)) && (regexNames.test(entryLastName))
        //console.log('namesareValid= '+namesareValid)

        if(namesareValid) {
            updateUserProfile(stateRetrieved.token,entryFirstName,entryLastName).then(function(response){
                dispatch(actionUpdateUserProfile(response.data.body))
                setEditName(false)
            })
            .catch(function(error){
                dispatch(actionUpdateUserProfileFail(error))
                console.log('error: '+error)
            })
        }
        else {
            dispatch(actionUpdateUserProfileFail())
        } 
    }

    return (
        <main className="main2 bg-dark">
            {editName === false? 
            (
            <div>    
                <div className="header">
                    <h1>Welcome back<br />{stateRetrieved.firstName +' '+ stateRetrieved.lastName} !</h1>
                    <button className="edit-button" onClick={() => openMoficationDisplayOfProfile()}>Edit Name</button>
                </div>
                <Accounts userProfileDisplay = 'modeUsual'/>
            </div>
            ) : 
            (
            <div>
                <div className="header2">
                    <h1 className='header2-title'>Welcome back</h1>
                    <div>
                        <input type='text' name='input-first-name' id='input-first-name' 
                        placeholder='Tony' onChange={(event) => setEntryFirstName(event.target.value)}/>
                        <input type='text' name='input-last-name' id='input-last-name' 
                        placeholder='Jarvis' onChange={(event) => setEntryLastName(event.target.value)}/>
                    </div>
                    {stateRetrieved.error ?
                     <p className='error-message-editProfile'>FirstName / LastName are missing or FirstName / LastName have a bad format.<br />Autorized characters: A to Z and a to z and - <br />Please retry your typing.</p>   
                    : null
                    }
                    <div className='container-buttonsSaveAndCancel'>
                        <button className='button-save' onClick={() => recordingDataProfile()}>Save</button>
                        <button className='button-cancel' onClick={() => openDisplayOfProfile()}>Cancel</button>
                    </div>
                </div>
                <Accounts userProfileDisplay = 'modeEdit'/>
            </div>
            )
            }
        </main>
    )
}
  
export default User