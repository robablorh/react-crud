import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col }from 'react-bootstrap'
import Users from "./components/Users";
import Adduserform from "./components/Adduserform";

class App extends Component{

 constructor(props){
   super(props);
   this.state = {
     users:[{
      name: "Roberta" ,
      email:"roby@gmail.com" ,
      gen: 27
     },
     
     {
      name: "Eyram" ,
      email:"eyram@gmail.com" ,
      gen: 23
     },{
      
      name: "Yayra" ,
      email:"yayra@gmail.com" ,
      gen: 24

     }]
   }
  
 }


 adder = (details) =>{
   this.setState({
    users:[...this.state.users, details]
   })
 }
  render () {
 

  return (
    <>
       <Container fluid >
            <Row>
                
                <Col md="4"> <Adduserform adder={this.adder} />    </Col>
                <Col > <Users usersData = {this.state.users}/></Col>
               


            </Row>

       </Container>

     
      
    </>
  ) }
}

export default App
