import React from 'react';
import {User } from '../model/Model'
import {AuthService}  from '../services/AuthServices';
import { Login } from './Login';


interface AppState { 
  user:User | undefined
}

export class App extends React.Component<{},AppState>{

  private authService = new AuthService();
  render (){
    return (
      <div> 
        <Login authService={this.authService}/>
      </div>
    )
  }
}

