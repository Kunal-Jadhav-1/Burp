import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Signin = () => {
    return (
        <div className="signin-page flex justify-center py-10">
            <SignIn path="/signin" routing="path" signUpUrl="/signup" />
        </div>
    );
};

export default Signin;
