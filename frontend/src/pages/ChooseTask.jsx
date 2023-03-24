import React from 'react'
import { Box, Button, Input, Select } from '@chakra-ui/react'

const ChooseTask = () => {
  return (
    <Box w={'35%'} m={'auto'} mt={'200px'} textAlign={'center'}>
        <form>
            <Select placeholder='Task Assign To'>
                <option value='Wonder Woman'>Wonder Woman</option>
                <option value='Iron Man'>Iron Man</option>
                <option value='Spider Man'>Spider Man</option>
                <option value='Ant Man'>Ant Man</option>
            </Select>

            <Input type='date' mt={10}/>

            <Select placeholder='Todo' mt={10}>
                <option value='Bug'>Bug</option>
                <option value='Feature'>Feature</option>
                <option value='Story'>Story</option>
            </Select>

            <Button 
                color={'teal'}
                type='submit' 
                variant="outline" 
                display={'inline-block'}
                mt={10}
                size={'lg'}
                borderRadius={10}
            >
                Create
            </Button>
        </form>
    </Box>
  )
}

export default ChooseTask