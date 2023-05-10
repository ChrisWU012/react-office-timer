import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

// set language or by appending /?lng=chi
function HeaderComponent() {
    return (
        <div className='fixed top-0 right-0 space-x-4'>
            <a href='/' className=''><FontAwesomeIcon icon={faHouse} /></a>
            <a href='/?lng=chi'>繁</a>
            <a href='/?lng=en'>Eng</a>
        </div>
    )
}

export default HeaderComponent