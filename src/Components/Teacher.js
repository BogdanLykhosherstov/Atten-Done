import React, { Component } from 'react';
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-responsive-modal';

import '../App.css';
import '../bootstrap/css/bootstrap.css';

class Teacher extends Component {

  constructor(){
      super();
      this.state = {
          open:false,
          page:0,
          studentList:['Matt', 'Bogdan', 'Rish', 'Dan','Matt', 'Bogdan','Matt', 'Bogdan', 'Rish', 'Dan','Matt', 'Bogdan'],
          teacherTopPanelText: "Classroom",
          classrooms: ['CPSC471', 'CPSC359', 'CPSC331', 'CPSC471', 'CPSC471',
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



  onClassroomClick(index, el, classroom) {
      console.log(index);
      this.setState({ teacherTopPanelText: el });
  }

  render() {
    var handler1 = this.props.handler;
    var students = this.state.studentList.map((element, index)=>
        <li key={index}><div className="teacher-student-removeButton" onClick={this.listDelete.bind(this, index)}><FontAwesome className="hover" name="minus-circle" size='2x' style={{ color: '#ea6c5b'}}/></div>{element}</li>
    );
    const classrooms = this.state.classrooms.map((classroom, index) => <li key={index} onClick={this.onClassroomClick.bind(this, index, classroom)}>{classroom}</li>);
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
 <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>

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
                    <h4>Attendance Record: {this.state.teacherTopPanelText}</h4><div className="teacher-addBtn" onClick={this.onOpenModal}><FontAwesome name="plus-circle" size='2x' style={{ color: '#6de8a8'}}/></div></div>

                <div className="teacher-text-field">
                    <ul className="teacher-students-list">{students}</ul>
                </div>
            </div>
            {/* Right side = class panel */}
            <div className="teacher-right bg-dark">
                <h4>View Classrooms:</h4>
                <div className="teacher-text-field">
                    <ul className="teacher-classroom-list">{classrooms}</ul>
                </div>
            </div>

        </div>
        </div>

    );
  }
}

export default Teacher;
