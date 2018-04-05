import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap/css/bootstrap.css';

class Selection extends Component {

  constructor(){
      super();
      this.state = {
          page:0
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
           <input type="email" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name"></input>
         </div>
         <div class="form-group">
           <input type="email" class="form-control" id="exampleInputUserName1" aria-describedby="emailHelp" placeholder="Username"></input>
         </div>
         <div class="form-group">
           <input type="email" class="form-control" id="exampleInputParentName" aria-describedby="emailHelp" placeholder="Parent Name"></input>
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
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
         </div>
         <div class="form-group">
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
         </div>
         <button type="submit" class="btn btn-danger register-btn" onClick={this.props.handler}>Register</button>
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
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
         </div>
         <div class="form-group">
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
         </div>
         <button type="submit" class="btn btn-danger register-btn" onClick={this.props.handler}>Register</button>
         </form>
         </div>
         </div>
     }
      return(
          <div>{toRender}</div>
 );
}}

export default Selection;
