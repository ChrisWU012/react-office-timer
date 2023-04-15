import React from 'react'
import { Footer } from 'react-daisyui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function FooterComponent() {
    return (
        <Footer className='p-10 bg-neutral text-neutral-content'>
            {/* <div>
                <Footer.Title>About Me</Footer.Title>
                <a className='link link-hover' href="https://github.com/ChrisWU012" target="_blank" rel="noreferrer">Github</a>
            </div> */}
            <div>
                <Footer.Title>Home</Footer.Title>
                <a href='/' style={{ textDecoration: "none", color: "white" }}><FontAwesomeIcon icon={faHouse} /></a>
            </div>
            <div>
                <Footer.Title>Terms of Use</Footer.Title>
                <a href='/terms-of-use' style={{ textDecoration: "none", color: "white" }}>Rules</a>
            </div>
            <div>
                <Footer.Title>Privacy Policy</Footer.Title>
                <a href='/privacy-policy' style={{ textDecoration: "none", color: "white" }}>Policy</a>
            </div>
        </ Footer>
    )
}

export default FooterComponent