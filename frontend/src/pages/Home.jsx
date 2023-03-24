import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import HomeImg from "../images/home-img.png";

const Home = () => {
  return (
    <Box>
        <Image 
            src={HomeImg}
            alt={'home-img'}
            w={'100%'}
            // h={'90vh'}
        />
    </Box>
  )
}

export default Home