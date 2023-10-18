import React from 'react';
import DivSignUp from '../components/Profile/SignUp/DivSignUp'
import DivFooter from '../components/Footer/DivFooter'
import '../components/Profile/SignUp/SignUp.css'

const SignPage = () => {
    return (
        <div>
            <DivSignUp />
            <DivFooter />
        </div>
    );
};

export default SignPage;