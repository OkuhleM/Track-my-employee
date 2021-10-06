import React, { Component } from 'react'
// import './App.css';


export default class Form extends Component {
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
          value: "",
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
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
       const newItems =  {name:this.state.name, surname:this.state.surname, task:this.state.task, position:this.state.position, salary:this.state.salary, food:this.state.food, date:this.state.date, time:this.state.time}
       this.setState({
         ...this.state.viewList
       })
    console.log(newItems)
      }
    render() {
        return (
            <div>
                   <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign Up:</legend>
          <label>Name:</label>
          <input type="text"  required placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}
          ></input>
          
          
          <label>Surname:</label>
          <input type="text"  required placeholder="surname" value={this.state.surname}  name="surname" onChange={this.handleChange}
          ></input>
          <label >Task</label>

          <select  name="task" value={this.props.value} onChange={this.handleChange}>
          <option value="html" >HTML</option>
          <option value="css" >CSS</option>
          <option value="javascript" >JAVASCRIPT</option>
          <option value="react" >REACT</option>

</select>
          <label >Position:</label>
          <select name="position" value={this.props.value} onChange={this.handleChange}>
          <option value="senior" >Senior</option>
          <option value="junior" >Junior</option>



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
          </fieldset>
        </form>
            </div>
        )
    }
}
