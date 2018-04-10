import React, { Component } from 'react';
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-responsive-modal';

import '../App.css';
import '../bootstrap/css/bootstrap.css';

class Student extends Component {

  constructor(){
      super();
      this.state = {
          open:false,
          page:0,
          teacherTopPanelText: "Student Name",
          studentclassrooms: ['CPSC471', 'CPSC359', 'CPSC331', 'CPSC471', 'CPSC471',
           'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471',
           'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471',
           'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471', 'CPSC471',
           'CPSC471', 'CPSC471', 'SOCI507', 'CPSC471', 'ENTI201', 'KINES301']
      };
  }
  onOpenModal = () => {
   this.setState({ open: true });
  };

  onCloseModal = () => {
   this.setState({ open: false });
  };

  listDelete(index, element){
      var newList = this.state.studentList;
      newList.splice(index, 1);
      this.setState({
          studentList: newList
      })
  }





  render() {
    var handler1 = this.props.handler;

    const studentclassrooms = this.state.studentclassrooms.map((classroom, index) => <li key={index}>{classroom} | Streak: 1</li>);
    return (

      <div className="App">
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <a className="navbar-brand" href="#">Student Pagee</a>

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


     <Modal open={this.state.open} onClose={this.onCloseModal} little>
       <h3>Adding Student</h3>
       <label>Student ID:</label>
       <input></input>
       <button className="btn btn-success" onClick={this.onCloseModal}>Add</button>
     </Modal>
        <div className="container-fluid teacher-container">
            {/* Left side = manage students panel */}
            <div className="teacher-left bg-dark">
                {/* this will have title and add buttons */}
                <div className="teacher-top-panel">
                    <h4>Attendance Record: {this.state.teacherTopPanelText}</h4><div className="teacher-addBtn" onClick={this.onOpenModal}></div></div>

                <div className="teacher-text-field">
                    <ul className="teacher-students-list">
                    {studentclassrooms}
                    </ul>
                </div>
            </div>
            {/* Right side = class panel */}


        </div>
        </div>

    );
  }
}

export default Student;
