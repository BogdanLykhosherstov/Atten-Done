import React, { Component } from 'react';
import logo from './logo.svg';
import Teacher from './Components/Teacher.js';
import Register from './Components/Register.js';
import Selection from './Components/Selection.js';
import {app, base} from './base';
import './App.css';
import './bootstrap/css/bootstrap.css';


class App extends Component {
//USE FOR NAVIGATION BETWEEN DIFFERENT PAGES
  constructor(){
      super();
      this.state = {
          page:0,
          username: "",
          password: "",
          authenticated: false
      };

      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
  }
  changePage(e){
      //MAIN page
      this.setState({page: 1});
      alert("logged in with: " + this.state.username + "and password: " + this.state.password);
  }
  backToLogin(e){
      //Login page
      this.setState({page:0});
  }
  registerPage(e){
      //Register page
      this.setState({page:2});
  }
  authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if(user && user.email) {
          this.loginForm.reset()
          this.setState({page: 1})
        }
      })
      .catch((error) => {
        alert("error in submit")
      })
  }

  render() {
    const loginPage =
        <div className="App">
       <h1 className="welcome-header">
           Atten-Done
       </h1>
       <div className="container login-container">
           <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
     <div className="form-group">
       <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" ref={(input) => {this.emailInput = input}} placeholder="Enter email"></input>
     </div>
     <div class="form-group">
       <input type="password" class="form-control" name="password" id="exampleInputPassword1" ref={(input) => {this.passwordInput = input}} placeholder="Password"></input>
     </div>
     <button type="submit" class="btn btn-success login-btn" >Login</button>
     <div class="form-group"> <button type="submit" class="btn btn-link " onClick={this.registerPage.bind(this)}>Not a member?</button></div>

       </form>
       </div>
     </div>

     var toRender;
     if(this.state.page === 0){
         toRender = loginPage;
     }
     else if(this.state.page === 1){
         toRender = <Teacher handler={this.backToLogin.bind(this)}/>;
     }
     else if(this.state.page == 2){
         // toRender = <Register handler={this.backToLogin.bind(this)}/>;
         toRender = <Selection handler={this.backToLogin.bind(this)}/>;
     }
    return (
        //if logged in return main page, otherwise, login page

        <div>{toRender}</div>
    );
  }
}

export default App;
