import React, { Component } from 'react'

export default class Adduserform extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "",
            email:"",
            gen: ""
        }
    }

    handleChange = (e) =>{
        e.preventDefault()
        this.setState({...this.state,[e.target.name]: e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
        this.props.adder(this.state)
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type='text' name='name' onChange={this.handleChange}/>

            <label>Email</label>
            <input type='text' name='email'  onChange={this.handleChange}/>

            <label>Gen</label>
            <input type='text' name='gen'  onChange={this.handleChange} />

          
            <input type='submit' value='Submit'   />

        </form>
      </div>
    )
  }
}


