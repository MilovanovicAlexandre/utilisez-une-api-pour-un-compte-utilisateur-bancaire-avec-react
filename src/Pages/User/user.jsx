import React from 'react'
import HeaderAccounts from '../../Components/headerAccounts/headeraccounts.jsx'
import Accounts from '../../Components/Accounts/accounts.jsx'
import './user.css'

function User() {
    return (
        <main className="main2 bg-dark">
            <HeaderAccounts />
            <Accounts />
        </main>
    )
}
  
export default User