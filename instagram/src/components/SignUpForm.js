import React from "react"
import config from "../config";

export const SignUpForm = () => (
    <div>
        <div className="sign-up-message">
            {config.messages.signUp}
        </div>
        <button className="sign-up-button">
        </button>
    </div>
);

export default SignUpForm;