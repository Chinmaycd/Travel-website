import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img className='img ' src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Travel-Tour-Business-Logo.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Companies</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li>+91 7415346494</li>
                    <li>abc@gmai.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
