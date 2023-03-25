import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios';

const SeeTask = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/task")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((e)=>{
            console.log("code dowm during all task")
        })
    },[])

  return (
    <Box w={'80%'} m={'auto'} mt={'200px'}>
        <SimpleGrid columns={[2,2,3,5]} gap={6}>
            {
                data.map((el,i)=> (
                    <Box ml={5} mt={5} mb={'80px'} key={i} boxShadow='outline' p='6' rounded='md' bg='white'>
                        <Box display={'flex'} gap={3} alignItems={'center'} >
                            <Text>Assign to:</Text>
                            <Text color={'red'} fontSize={'2xl'}>{el.userName}</Text>
                        </Box>
                        {
                            el.list.map((item,index)=>{
                                return<li key={index}>{item.title}</li>
                            })
                        }
                    </Box>
                ))
            }
        </SimpleGrid>
    </Box>
  )
}

export default SeeTask