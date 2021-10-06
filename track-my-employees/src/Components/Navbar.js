import React, { Component } from 'react'
// import './App.css';

import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div className="div" >
        <Navbar>
          <Link to="/form">Data</Link>
          <Link to="/form">Edit</Link>
          <Link to="/viewlist"> viewList</Link>
        </Navbar>
      </div>
    )
  }


}

// var stylingObject = (navbar) =>({
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     textAlign: "center",
//     position: "fixed",
//     width: 100,
//     height: 70,
//     // padding: 0, 20,
//     top: 0,
//     left: 0,
   

//   }
// })

