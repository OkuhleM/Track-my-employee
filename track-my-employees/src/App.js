import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      task: "",
      position: "",
      salary: "",
      food: "",
      date: "",
      time: "",
      add: "",
      edit: "",
      viewList: []
     
    }
    this. handleChange =  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange=(e)=> {
    this.setState({
     [e.target.name]: e.target.value
    });
  }
  handleSubmit=(e) => {
    e.preventDefault();
   const newItems =  {name:this.state.name, surname:this.state.surname, task:this.state.task, position:this.state.position, salary:this.state.salary, food:this.state.food, date:this.state.date, time:this.state.time}
   this.setState({
     ...this.state, viewList
   })
  }

  
  render(){
    return(
      <div className="container">
        
        <form onSubmit={this.handleSubmit}>
        <nav className="navbar" >
          <a href="#">
            DATA
          </a>&nbsp;&nbsp;&nbsp;
          <a href="#">
            EDIT
          </a>
          <a className="float" href="#">
           view list
          </a>
        </nav>
          
          <label>Name:</label>
          <input type="text"  required placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}
          ></input>
          <label>Surname:</label>
          <input type="text"  required placeholder="surname" value={this.state.surname}  name="surname" onChange={this.handleChange}
          ></input>
          <label >Task</label>
          <select className="select" value={this.state.task} onChange={this.handleChange}>
          <option value={this.state.task} >HTML</option>
          <option value={this.state.task} >CSS</option>
          <option value={this.state.task} >JAVASCRIPT</option>
          <option value={this.state.task} >REACT</option>



</select>
          <label >Position:</label>
          <select value={this.state.position}  onChange={this.handleChange}>
          <option value={this.state.position} >senior</option>
          <option value={this.state.position} >Junior</option>



</select>
          <label>Salary:</label>
          <input type="number" required placeholder="salary" value={this.state.salary} name="salary" onChange={this.handleChange}
          ></input>
          <label >Food:</label>
          <input type="text" required placeholder="food" value={this.state.food} name="food" onChange={this.handleChange}
          ></input>
          <label>Date:</label>
          <input type="date" required value={this.state.date} name="date" onChange={this.handleChange}
          ></input>
          <label>Time:</label>
          <input type="time"  required  value={this.state.time} name="time" onChange={this.handleChange}
          ></input>
          <br />
          <button className="button" type="submit">Button</button>
        </form>

<div>
  <ul>
  {this.state.viewList.map(list=>{
return (
  <li>
    <p>{list.name}</p>
    <p>{list.surname}</p>
    <p>{list.food}</p>
    <p>{list.age}</p>
    <p>{list.date}</p>
  </li>

)
})}
  </ul>
</div>

        </div>
    )
  }
}

export default App;
