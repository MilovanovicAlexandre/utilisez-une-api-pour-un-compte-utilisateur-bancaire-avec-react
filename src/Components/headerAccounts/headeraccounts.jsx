import React from 'react'
import './headeraccounts.css'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { updateUserProfile } from '../../Services/apiCalls';
import { useDispatch } from 'react-redux';
import { actionUpdateUserProfile } from '../../Redux/store';
import { actionUpdateUserProfileFail } from '../../Redux/store';

function HeaderAccounts() {

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
        updateUserProfile(stateRetrieved.token,entryFirstName,entryLastName).then(function(response){
            dispatch(actionUpdateUserProfile(response.data.body))
            setEditName(false)
        })
        .catch(function(error){
            dispatch(actionUpdateUserProfileFail(error))
        })
    }

    return (
        <div>
            {editName === false? 
            (
            <div className="header">
                <h1>Welcome back<br />{stateRetrieved.firstName +' '+ stateRetrieved.lastName} !</h1>
                <button className="edit-button" onClick={() => openMoficationDisplayOfProfile()}>Edit Name</button>
            </div>
            ) : 
            (
            <div className="header">
                <h1>Welcome back</h1>
                <div>
                    <input type='text' name='input-first-name' id='input-first-name' 
                    placeholder='Tony' onChange={(event) => setEntryFirstName(event.target.value)}/>
                    <input type='text' name='input-last-name' id='input-last-name' 
                    placeholder='Jarvis' onChange={(event) => setEntryLastName(event.target.value)}/>
                </div>
                <div>
                    <button className='button-save' onClick={() => recordingDataProfile()}>Save</button>
                    <button className='button-cancel' onClick={() => openDisplayOfProfile()}>Cancel</button>
                </div>
            </div>
            )
            }
        </div>
    )
}
  
export default HeaderAccounts