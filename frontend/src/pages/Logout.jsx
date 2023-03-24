import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React from 'react'

const Logout = () => {
    const toast = useToast()

    const handleClick = ()=>{
      if(!localStorage.getItem("taskManagerToken")){
        toast({
          title: 'Login First.',
          description: "To Logout, You Need To Login First",
          status: 'warning',
          duration: 6000,
          isClosable: true,
          position: "top",
        }) 
      }else{
        toast({
          title: 'Logout Successfully.',
          description: "",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: "top",
        }) 
      }

        localStorage.removeItem("taskManagerToken");

          
    }
  return (
    <Box>
        <Text mb={8} fontFamily={'cursive'} fontSize={'3xl'}>See You Again!</Text>
        <Button onClick={handleClick} colorScheme='teal' size='md'>Logout</Button>
    </Box>
  )
}

export default Logout