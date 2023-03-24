import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'

const Login = () => {
  return (
    <form>
        <Input 
            type={"email"} 
            // onChange={handleChange} 
            // value={form.email} 
            name="email" 
            required="required"
            placeholder="Enter email" 
            m="0.5rem"
        />
        <Input 
            type={"password"} 
            // onChange={handleChange} 
            // value={form.password} 
            name="password" 
            required="required" 
            placeholder="Enter password"  
            m="0.5rem"
        />
        <Button 
            color={'teal'}
            type='submit' 
            variant="outline" 
            m="0.5rem"
        >
            Login
        </Button>
</form>
  )
}

export default Login