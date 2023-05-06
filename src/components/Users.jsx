import React from 'react'
import {Container, Row } from 'react-bootstrap'
import Fuser from './Fuser'



 
export default function Users({usersData}) {
  return (
    <div>
          <Container>
               <Row>
                {
                    usersData.map((user, index)=>{
                        return(
                            <Fuser key={index} user={user}/>
                        )
                    })
                }
                  
               </Row>
            
            
            </Container>  
    </div>
  )
}
