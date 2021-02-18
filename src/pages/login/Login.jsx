
import React, { useState } from 'react'
import axios from 'axios'
import { Container,Row,Col } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'



function Login (){
    
    const [token,setToken] = useState()
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const history = useHistory()

    const loginFun = async ()=> {
     
      try {
       
        const url = process.env.REACT_APP_URL
        console.log(url)
        const res = await axios (url+"authors/login",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"

          },
          data:{
            email,password
          }
        })
        console.log(res)
        if(res.status===200){
          localStorage.setItem("accesToken",res.data.accessToken)
          console.log(res)
          history.push("/Home")
        }
     
      } catch (error) {
        console.log(error)
      }
    }
   


    return(
      <Container>
      <Row>
        <Col xs={12}>
        <input
          value={email}
          type="email"
          onChange={e=>setEmail(e.target.value)}
          name="email"
          placeholder="test@test.com"
      /> Email
     
        </Col>
        <Col xs={12}>
        <input
          value={password}
          type="password"
          placeholder="**********"
          onChange={e=>setPassword(e.target.value)}
          name="password"
      /> Password
        </Col>
    
      
     
      </Row>
      
       
     
            
         
            
         <button type="button"onClick={loginFun} style={{marginRight:"30px"}}>Log in </button>
       
     </Container>
    )
}

export default Login