import React from 'react'
import FooterComponent from '../components/FooterComponent'

function About() {
    return (
        <div >
            <div className='text-left min-h-screen m-2'>
                <br />
                <b className='text-3xl'>Welcome</b>  to <b>Time2off 放工啦！</b>
                <br />
                <br />
                <p>Our countdown tool for employees! Our easy-to-use tool is designed to help you and your team stay on track and meet important deadlines by counting down the days, hours, and minutes until your next deadline.</p>
                <br />
                <p>Using our countdown tool can have a number of benefits for your organization. By providing a clear and visible reminder of upcoming deadlines, your employees will be better equipped to manage their time and prioritize their work effectively. This can help to reduce stress and increase productivity, as employees are able to focus on the most important tasks at hand.</p>
                <br />
                <p>Our countdown tool can also help to foster a culture of accountability and responsibility within your workplace. By encouraging employees to take ownership of their work and meet their deadlines, you can build trust and confidence in your team members, leading to better overall performance and success.</p>
                <br />
                <p>Whether you're a small business owner, a manager in a larger corporation, or an individual looking to stay on top of your own deadlines, our countdown tool is a valuable resource that can help you improve efficiency, productivity, and accountability. Try it out today and see the results for yourself!</p>
                <br />
            </div>

            <footer>
                <FooterComponent />
            </footer>
        </div>
    )
}

export default About