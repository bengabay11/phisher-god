import React from "react"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import DownloadInstagramForm from "./DownloadInstagramForm";
import CopyRights from "./CopyRights";

export const App = () => (
    <div>
        <LoginForm/>
        <SignUpForm/>
        <DownloadInstagramForm/>
        <CopyRights/>
    </div>
);

export default App;