
import axios from 'axios'
import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {useHistory,Redirect } from 'react-router-dom'


function Register (){
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const history = useHistory()

    const registerFun = async (mybody)=> {
     
        try {
          console.log(mybody)
          const url = process.env.REACT_APP_URL
          console.log(url)
          const res = await axios (url+"authors/register",{
            method:"POST",
            headers:{
              "Content-Type": "application/json"

            },
            data:{
              email,password,surname,name
            }, withCredentials:true
          })
         localStorage.setItem("accesToken",res.data.accessToken)

          history.push("/login")
        } catch (error) {
          console.log(error)
        }
      }

      //'same-origin' if include not working
    //   const handleChange = (e) => {
    //     const { name, value } = e.currentTarget;
    //     setRegisterBody(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };


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
          <Col xs={12}>
          <input
            value={name}
            type="text"
            placeholder="name"
            onChange={e=>setName(e.target.value)}
            name="name"
        /> Name
          </Col>
          <Col xs={12}>
          <input
            value={surname}
            type="text"
            placeholder="name"
            onChange={e=>setSurname(e.target.value)}
            name="surname"
        /> Surname
          </Col>
       
        </Row>
        
         
       
              
           
              
           <button type="button"onClick={registerFun} style={{marginRight:"30px"}}>Lick me </button>
           <a href="http://localhost:3001/authors/googleLogin"><button>Sign in with Google!</button></a>
       </Container>
    )
}

export default Register