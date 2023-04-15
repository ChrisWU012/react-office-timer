import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function HeaderComponent() {
    return (
        <div>
            <a href='/'><FontAwesomeIcon icon={faHouse} /></a>

        </div>
    )
}

export default HeaderComponent