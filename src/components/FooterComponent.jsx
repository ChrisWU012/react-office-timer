import React from 'react'
import { Footer } from 'react-daisyui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function FooterComponent() {
    return (
        <div>
            <div className='bg-gray-700 w-100 p-10'>
                The tool is an application that allows you to track your work hours and earnings.
                <br />
                <br />
                It helps you to set up your work schedule, log in and out of the system,
                and the tool will automatically calculate your earnings.
                <br />
                <br />
                The benefit of using this tool is that it helps you manage your time
                and finances more effectively by providing valuable insights into your work and earnings.
            </div>
            <Footer className='p-10 bg-neutral text-neutral-content'>
                <div>
                    <Footer.Title>Home</Footer.Title>
                    <a href='/' style={{ textDecoration: "none", color: "white" }}><FontAwesomeIcon icon={faHouse} /></a>
                </div>
                <div>
                    <Footer.Title>About</Footer.Title>
                    <a href='/about' style={{ textDecoration: "none", color: "white" }}>About</a>
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
        </div>
    )
}

export default FooterComponent