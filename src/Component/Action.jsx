import React, { useState } from 'react'
import './Action.css'
const Action = () => {
    const [fname, setLname] = useState('')
    const [email, setEmail] = useState('')
    function Validate(e) {
        e.preventDefault()
        let result = true
        let obj = {
            email: email,
            fname: fname
        }
        if (email.length === 0) {
            document.getElementById('email').innerHTML = "Email cannot be empty"
            result = false
        }
        else if (email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email').innerHTML = ""
        }
        else {
            document.getElementById('email').innerHTML = 'invalid email'
            result = false
        }

        if (fname.length === 0) {
            document.getElementById('name').innerHTML = 'name cannot be empty'
            result = false
        }
        else if (fname.length < 4) {
            document.getElementById('name').innerHTML = 'name length too short'
            result = false
        }
        else {
            document.getElementById('name').innerHTML = ''
        }
    }

    return (

        <div className='action'>
            <img src="https://img.freepik.com/free-photo/flat-lay-travel-essentials-with-sunglasses-money_23-2148434416.jpg?w=1380&t=st=1706853071~exp=1706853671~hmac=e9b2fcda9b10a9a52ada1c3eec165395e478f1c6db63b4240884a16622d884b7" alt="" />
            <div className='action-left'>
                <h1>Let's Travel</h1>
                {/* <p>What's your next destination</p> */}
            </div>
            <div className='action-right'>
                <h1>Connect with us</h1>
                <form onSubmit={Validate}>
                    <label>Name </label><br></br>
                    <input type='text' value={fname} />
                    <p id='name' className='text-danger'></p>

                    <label>Email </label><br></br>
                    <input type='email' value={email} />
                    <p id='email' className='text-danger'></p>
                    <button className='btn btn-primary'>Subscribe</button>
                </form>
            </div>
        </div>

    )
}

export default Action
