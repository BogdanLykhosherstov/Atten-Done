import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap/css/bootstrap.css';

class Register extends Component {

  constructor(){
      super();
      this.state = {
          page:0
      };
  }

  render() {
      const loginPage =
          <div className="App">
         <h2 className="welcome-header">
             Register Page
         </h2>
         <div className="container login-container">
             <form>
         <div class="form-group">
           <input type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name"></input>
         </div>
         <div class="form-group">
           <input type="email" class="form-control" id="exampleInputUserName1" aria-describedby="emailHelp" placeholder="Username"></input>
         </div>
       <div class="form-group">
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
       </div>
       <div class="form-group">
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
       </div>
      <button type="submit" class="btn btn-danger register-btn" onClick={this.props.handler}>Register</button>
         </form>
         </div>
     </div>
      return(
          <div>{loginPage}</div>
 );
}}

export default Register;
