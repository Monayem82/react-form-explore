import React from 'react';

const FormData = () => {

    const handleFormData=(formData)=>{
        console.log(formData.get('username'))
        console.log(formData.get('email'))
    }

    return (
        <div>
            <form action={handleFormData}>
                <input type="text" name='username' placeholder='User name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormData;