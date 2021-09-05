import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthServices";

interface LoginProps {
    authService: AuthService
}
interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessfull: boolean
}
interface CustomEvent {
    target: HTMLInputElement
}
export class Login extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        userName: '', 
        password: '',
        loginAttempted: false,
        loginSuccessfull: false
    }

    private setUserName(event:CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event:CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSubmit ( event: SyntheticEvent){
        event.preventDefault();
        this.setState({loginAttempted: true})
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if(result){
            this.setState({loginSuccessfull:true})
        }else{
            this.setState({loginSuccessfull:false})
        }
    }

    render () {

        return ( 
            <div> 
                <h2>
                    Please Login: 
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input value={this.state.userName} onChange={e => this.setUserName(e)}/> <br /> 
                        <input value={this.state.password} type={'password'} onChange={e => this.setPassword(e)}/> <br /> 
                        <button type='submit' value={'Login'}> Login</button>
                    </form>
                </h2>
                {this.state.loginAttempted && (
                    this.state.loginSuccessfull ? 
                        <label>Login successfull </label>
                        :
                        <label>Login failed </label>
                    ) 
                }
            </div>
        )
    }
}