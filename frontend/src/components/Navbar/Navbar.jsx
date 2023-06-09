import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import Account from '../Drawer/Account'

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("taskManagerToken")) || ""; 
  const [userName, setUserName] = useState(token.user)
  const navigate = useNavigate();

  return (
    <Box 
        w={'100%'}
        bg={'#89C4E1'}
        pt={'1%'}
        pb={'1%'}
        pr={'3%'}
        pl={'2%'}
        color={'white'}
        display={'flex'}
        justifyContent = {'space-between'}
        fontFamily={'cursive'}
        fontSize={'25px'}
        position={'fixed'}
        zIndex={5}
        top={0}
    >
        <Box><Link to="/">Task Manager</Link></Box>

        <Box 
          cursor={'pointer'}
          onClick={()=>navigate("/option")}
        >
          {userName? "Create Task": ""}
        </Box>

        <Box>
          <Account />
        </Box>
    </Box>
  )
}

export default Navbar