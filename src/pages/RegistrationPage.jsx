// Samuel Dameg

import RegistrationInfo from '../components/RegistrationInfo';

function RegistrationPage() {
    return (
        <>
            <div className="page-header">
                <h2 className="page-title">Register</h2>
                <p className="page-subtitle">
                    Sign up to receive exclusive promotions and weekly deals.
                </p>
            </div>
            <RegistrationInfo />
        </>
    );
}

export default RegistrationPage;
