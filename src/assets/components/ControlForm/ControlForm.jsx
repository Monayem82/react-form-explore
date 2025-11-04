import React, { useState } from 'react';

const ControlForm = () => {

    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
    }

    const handlePasswordOnChange=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
        console.log(password)
        console.log(password.length+1)

        if(password.length<6){
            setError('password should not be less then 6 cherecter')
        }else{
            setError('')
        }

    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="username" required />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <p><span>{error}</span></p>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlForm;