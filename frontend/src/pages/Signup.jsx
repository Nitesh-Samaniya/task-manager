import React, { useState } from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import axios from "axios"

const initState = {
    name: "",
    email: "",
    password: ""
}

const Signup = () => {
    const [formData, setFormData] = useState(initState);
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        await axios({
            url: "http://localhost:8080/user/signup",
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json;charset=UTF-8"
            },
            data: formData
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch((e) => {
              console.log(e);
            });
      
          setFormData({
            name: "",
            email: "",
            password: ""
          });
    
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input 
            type={"text"} 
            onChange={handleChange} 
            value={formData.name} 
            name="name" 
            required="required"
            placeholder="Enter username" 
            m="0.5rem"
        />
        <Input 
            type={"email"} 
            onChange={handleChange} 
            value={formData.email}  
            name="email" 
            required="required"
            placeholder="Enter email" 
            m="0.5rem"
        />
        <InputGroup size='md'>
            <Input 
                type={show ? 'text' : 'password'} 
                onChange={handleChange} 
                value={formData.password} 
                name="password" 
                required="required" 
                placeholder="Enter password"  
                m="0.5rem"
            />

            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick} mr={5} mt={4}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>

        </InputGroup>

        
        <Button 
            color={'teal'}
            type='submit' 
            variant="outline" 
            m="0.5rem"
        >
             Sign Up
        </Button>
    </form>
  )
}

export default Signup