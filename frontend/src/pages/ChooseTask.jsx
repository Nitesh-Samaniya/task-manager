import React, { useState } from 'react'
import { Box, Button, Input, Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const initialData = {
    assignTo: "",
    date: "",
    todo: "",
}

const ChooseTask = () => {
    const [formData, setFormData] = useState(initialData)
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleCreate = (e)=>{
        e.preventDefault();

        localStorage.setItem("userChoosen", JSON.stringify(formData));

        setFormData({
            assignTo: "",
            date: "",
            todo: "",
        })

        return navigate("/todo")
    }

  return (
    <Box 
        w={['80%', '45%', '45%','35%']} 
        m={'auto'} 
        mt={'200px'} 
        textAlign={'center'}
        boxShadow='outline' p='6' rounded='md' bg='white'
    >
        <form onSubmit={handleCreate}>
            <Select 
                placeholder='Task Assign To' 
                name='assignTo' 
                value={formData.assignTo} 
                onChange={handleChange}
                required
            >
                <option value='Wonder Woman'>Wonder Woman</option>
                <option value='Iron Man'>Iron Man</option>
                <option value='Spider Man'>Spider Man</option>
                <option value='Ant Man'>Ant Man</option>
            </Select>

            <Input 
                type='date' 
                mt={10} 
                name="date" 
                value={formData.date} 
                onChange={handleChange}
                required
            />

            <Select 
                placeholder='Todo' 
                mt={10} 
                name="todo" 
                value={formData.todo} 
                onChange={handleChange}
                required
            >
                <option value='Bug'>Bug</option>
                <option value='Feature'>Feature</option>
                <option value='Story'>Story</option>
            </Select>

            <Button 
                colorScheme='teal'
                type='submit' 
                display={'inline-block'}
                mt={10}
                size={'lg'}
                borderRadius={10}
                pr={10}
                pl={10}
            >
                Create
            </Button>
        </form>
    </Box>
  )
}

export default ChooseTask