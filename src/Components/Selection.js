import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap/css/bootstrap.css';
import {app, base} from '../base';


class Selection extends Component {

  constructor(){
      super();
      this.state = {
          page:0,
          username: "",
          password: ""
      };
  }

  studentSelector(){
      this.setState({page:1});
  }
  teacherSelector(){
      this.setState({page:2});
  }
  parentSelector(){
      this.setState({page:3});
  }
  schoolSelector(){
      this.setState({page:4});
  }

  signUp() {
    console.log('this.state', this.state);
    const {username, password} = this.state;
    app.auth().createUserWithEmailAndPassword(username, password)
      .catch(error => {
        console.log('error', error);
      })
  }

  render() {
      const selectionPage =
          <div className="App">
         <h2 className="welcome-header">
             Who are you?
         </h2>
         <div className="container selection-page-container bg-dark">
             <button id="studentBtn" className="btn btn-danger select-btn" onClick={this.studentSelector.bind(this)}>Student</button>
             <button id="teacherBtn" className="btn btn-success select-btn" onClick={this.teacherSelector.bind(this)}>Teacher</button>
             <button id="parentBtn"  className="btn btn-info select-btn" onClick={this.parentSelector.bind(this)}>Parent</button>
             <button id="schoolBtn"  className="btn btn-warning select-btn" onClick={this.schoolSelector.bind(this)}>School</button>
         </div>
     </div>
     var toRender;
     if(this.state.page==0){
         toRender = selectionPage;
     }
     //STUDENT
     else if (this.state.page == 1) {
         toRender =  <div className="App">
         <h2 className="welcome-header">
             Student Registration
         </h2>
         <div className="container login-container">
             <form>
         <div class="form-group">
           <input type="text" name="Name" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name"></input>
         </div>
         <div class="form-group">
           <input type="text" name="username" class="form-control" id="exampleInputUserName1" aria-describedby="emailHelp" placeholder="Username"></input>
         </div>
         <div class="form-group">
           <input type="text" name="Age" class="form-control" id="exampleInputParentName" aria-describedby="emailHelp" placeholder="Age"></input>
         </div>
       <div class="form-group">
         <input type="email" name="email" class="form-control" id="exampleInputEmail1" onChange={event => this.setState({username: event.target.value})} aria-describedby="emailHelp" placeholder="Enter email"></input>
       </div>
       <div class="form-group">
         <input type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={event => this.setState({password: event.target.value})} placeholder="Password"></input>
       </div>
      <button type="submit" class="btn btn-danger register-btn" onClick={() => this.signUp()}>Register</button>
         </form>
         </div>
     </div>
     }
     //TEACHER
     else if (this.state.page == 2) {
         toRender =  <div className="App">
         <h2 className="welcome-header">
             Teacher Registration
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
         <input type="email" class="form-control" id="exampleInputEmail1" onChange={event => this.setState({username: event.target.value})} aria-describedby="emailHelp" placeholder="Enter email"></input>
         </div>
         <div class="form-group">
         <input type="password" class="form-control" id="exampleInputPassword1" onChange={event => this.setState({password: event.target.value})} placeholder="Password"></input>
         </div>
         <button type="submit" class="btn btn-danger register-btn" onClick={() => this.signUp()}>Register</button>
         </form>
         </div>
         </div>
     }
     // PARENT
     else if (this.state.page == 3) {
         toRender =  <div className="App">
         <h2 className="welcome-header">
             Parent Registration
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
           <input type="email" class="form-control" id="exampleInputUStudentID" aria-describedby="emailHelp" placeholder="Enter your student's ID"></input>
         </div>
         <div class="form-group">
         <input type="email" class="form-control" id="exampleInputEmail1" onChange={event => this.setState({username: event.target.value})} aria-describedby="emailHelp" placeholder="Enter email"></input>
         </div>
         <div class="form-group">
         <input type="password" class="form-control" id="exampleInputPassword1" onChange={event => this.setState({password: event.target.value})} placeholder="Password"></input>
         </div>
         <button type="submit" class="btn btn-danger register-btn" onClick={() => this.signUp()}>Register</button>
         </form>
         </div>
         </div>
     }
     else if (this.state.page == 4) {
            toRender =  <div className="App">
            <h2 className="welcome-header">
                School Registration
            </h2>
            <div className="container login-container">
                <form>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name"></input>
            </div>
            <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" onChange={event => this.setState({username: event.target.value})} aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" onChange={event => this.setState({password: event.target.value})} placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-danger register-btn" onClick={() => this.signUp()}>Register</button>
            </form>
            </div>
            </div>
           }
      return(
          <div>{toRender}</div>
 );
}}

export default Selection;
