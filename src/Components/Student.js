import React, { Component } from 'react';
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';

import '../App.css';
import '../bootstrap/css/bootstrap.css';

class Teacher extends Component {

  constructor(){
      super();
      this.state = {
          page:0,
          attendingClasses: ['CPSC471', 'CPSC359', 'CPSC331', 'ENTI201']
      };
  }

  onAttendingClassClick(index, el, attendingClass) {
      console.log(index);
  }

  render() {
    var handler1 = this.props.handler;
    const attendingClasses = this.state.attendingClasses.map((attendingClass, index) => <li key={index} onClick={this.onAttendingClassClick.bind(this, index, attendingClass)}>{attendingClass}</li>);
    return (

      <div className="App">
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <a className="navbar-brand" href="#">Atten-Done</a>

   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
       <li className="nav-item active">
         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#" onClick={handler1}>Login</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Pricing</a>
       </li>
       <li className="nav-item">
         <a className="nav-link " href="#">Disabled</a>
       </li>
     </ul>
   </div>
 </nav>
        <div className="container-fluid teacher-container">
            {/* Left side = manage students panel */}
            <div className="teacher-left bg-dark">
                {/* this will have title and add buttons */}
                <div className="teacher-top-panel"><h4>Attendance Record for David:</h4><div className="teacher-addBtn"><FontAwesome name="plus-circle" size='2x' style={{ color: '#6ff268'}}/></div></div>

                <div className="teacher-text-field">

                </div>
            </div>
            {/* Right side = class panel */}
            <div className="teacher-right bg-dark">
                <h4>Leaderboard:</h4>
                <div className="teacher-text-field">
                    <ul className="teacher-classroom-list">{attendingClasses}</ul>
                </div>
            </div>

        </div>
        </div>

    );
  }
}

export default Teacher;
