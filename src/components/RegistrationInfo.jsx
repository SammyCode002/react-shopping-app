// Samuel Dameg

import { useState } from 'react';

function RegistrationInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!name.trim()) errs.name = 'Name is required.';
        if (!email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errs.email = 'Enter a valid email address.';
        }
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setName(name.trim());
        setEmail(email.trim().toLowerCase());
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="success-card">
                <div className="success-icon">🎉</div>
                <h3>You're registered!</h3>
                <p>
                    Thanks, <strong>{name}</strong>! We'll send exclusive deals to{' '}
                    <strong>{email}</strong>.
                </p>
            </div>
        );
    }

    return (
        <div className="reg-card">
            <h3>Create your account</h3>
            <p className="reg-desc">
                Register to receive exclusive promotions and weekly deals.
            </p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                        className={`form-input${errors.name ? ' error' : ''}`}
                        type="text"
                        id="name"
                        placeholder="Your name"
                        value={name}
                        maxLength={80}
                        onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                        className={`form-input${errors.email ? ' error' : ''}`}
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        value={email}
                        maxLength={254}
                        onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })); }}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <button type="submit" className="btn-submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationInfo;
