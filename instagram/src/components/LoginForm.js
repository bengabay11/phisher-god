import React from "react"
import config from "../config";
import OrComponent from "./OrComponent";

export const LoginForm = ({username, password, canLogin}) => {
    return (
        <div className="login-form">
            <div className="login-form-title">
                {config.messages.title}
            </div>
            <input type="text" className="username-input"/>
            <input type="text" className="password-input"/>
            <button className="login-button"/>
            <OrComponent/>
            <button className="login-with-facebook-button">
            </button>
            <button className="forgot-password-button">
            </button>
        </div>
    );
};

export default LoginForm;