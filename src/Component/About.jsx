import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='about-left-in'>
                    <h1>About us</h1>
                    <p>Travel Agency is the largest independently owned travel agency headquartered in California, and consistently ranked among the top 50 largest in the United States.
                        We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment.
                    </p>
                    <button>Know more</button>
                </div>
            </div>
            <div className='about-right'>
                <img src="https://3.bp.blogspot.com/-Bi1yZ7002-Q/UcRtX4W_hLI/AAAAAAAAA0w/DFwK02OWFjU/s1600/Travel+Company+3.jpg" alt="" />
            </div>
        </div>
    )
}

export default About