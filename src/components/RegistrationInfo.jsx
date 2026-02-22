// Samuel Dameg

import { useState } from 'react';

function RegistrationInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for registering!\nName: ${name}\nEmail: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Registration Information</legend>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </fieldset>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationInfo;
