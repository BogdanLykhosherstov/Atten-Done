import React, { Component } from 'react';
import logo from './logo.svg';
import Teacher from './Components/Teacher.js';
import Register from './Components/Register.js';
import Selection from './Components/Selection.js';
import './App.css';
import './bootstrap/css/bootstrap.css';
class App extends Component {
//USE FOR NAVIGATION BETWEEN DIFFERENT PAGES
  constructor(){
      super();
      this.state = {
          page:0,
          user: "",
          pass: ""
      };
  }
  changePage(e){
      //MAIN page
      this.setState({page: 1});
  }
  backToLogin(e){
      //Login page
      this.setState({page:0});
  }
  registerPage(e){
      //Register page
      this.setState({page:2});
  }
  render() {
    const loginPage =
        <div className="App">
       <h1 className="welcome-header">
           Atten-Done
       </h1>
       <div className="container login-container">
           <form onSubmit={this.changePage.bind(this)}>
     <div className="form-group">
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
     </div>
     <div class="form-group">
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
     </div>
     <button type="submit" class="btn btn-success login-btn">Login</button>
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
