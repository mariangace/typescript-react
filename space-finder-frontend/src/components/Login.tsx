import React from "react";
import { AuthService } from "../services/AuthServices";

interface LoginState {
    authService: AuthService
}
export class Login extends React.Component<LoginState> {
    render () {
        return ( 
            <div> Login works</div>
        )
    }
}