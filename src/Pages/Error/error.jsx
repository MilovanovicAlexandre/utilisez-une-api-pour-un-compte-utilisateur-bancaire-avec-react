import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'

function Error() {
    return (
        <main>
            <div className='containerTextErrorAndLink'>
              <div className='containerTextError404'>
                <p className='textError404'>Error 404</p>
                <p className='textError404Continuation'>Assets not found</p>
              </div>
              <div className='containerLinkError404'>
                <Link to='/Home'><p className='textLinkError404'>Return to the home page</p></Link>
              </div>
            </div>
        </main>
    )
}
  
export default Error