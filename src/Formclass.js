import React, { Component } from "react";

class Formcompo extends Component{
   state = {
    Name : '',
    Department : '',
    Rating : '',
    Empdata : [] 
    
   }
 changeHandle = (event)=>{
  this.setState({[event.target.name] : event.target.value})
  console.log(this.state.Name);
  console.log(this.state.Department);
 }
 clickHandle = (e)=>{
  e.preventDefault();
let newObj = {
  name : this.state.Name,
  Department: this.state.Department,
  Rating : this.state.Rating
}
this.state.Empdata.push(newObj);
this.setState({Empdata : this.state.Empdata})
console.log(this.state.Empdata);
 }
render(){
    return(
       
          <>
          <form>
        <div className="container">
          <div className="child">
          <label htmlFor='name'>NAME :</label>
          <input type='text' id='name' placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required/>
          </div>
          <br/>
          <div className="child">
          <label htmlFor='dept'>Departmente :</label>
          <input type='text' id='dept' placeholder="Department" name="Department" value={this.state.Department} onChange={this.changeHandle} required/>
          </div>
          <br/>
          <div className="child">
          <label htmlFor='rate'>Rating :</label>
          <input type='number' id='rate' placeholder="Rating" name="Rating" value={this.state.Rating} onChange={this.changeHandle} required/>
          </div>
          <br/>
          <div className="child">
          <button onClick={this.clickHandle}>Submit</button>
          </div>
          <br/>
          </div>
          <div className="container2">
          {this.state.Empdata.map((item,index)=>{
            return(
              <>
           
        
          
              <span className="child2">Name :{item.name} | Departmente :{item.Department} | Rating :{item.Rating}</span>
              
           
              </>
              
            )
          })}
           </div>
          
          </form>
         </>  
      
      
    
    )
  }
}
export default Formcompo;