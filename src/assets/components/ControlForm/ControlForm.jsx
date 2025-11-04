import React from 'react';

const ControlForm = () => {

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.username.value)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="username" required />
                <br />
                <input type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlForm;