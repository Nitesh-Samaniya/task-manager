import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { AddIcon, ViewIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

const Option = () => {
    const navigate = useNavigate();

  return (
    <Box textAlign={'center'} mt={'200px'}>

        <Button display={'inline-block'} size='lg' onClick={()=>navigate("/seeTask")}>
            <ViewIcon boxSize={5} /> See All Tasks
        </Button>

        <br />

        <Button mt={10} display={'inline-block'} size='lg' onClick={()=>navigate("/chooseTask")}>
            <AddIcon boxSize={5} color='teal'/> Assign Task
        </Button>

    </Box>
  )
}

export default Option