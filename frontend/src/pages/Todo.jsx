import React, { useEffect, useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { AddIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
    const userChoosen = JSON.parse(localStorage.getItem("userChoosen")) || "";

    const [assignTo, setAssignTo] = useState(userChoosen.assignTo);
    const [todoCategory, setTodoCategory] = useState(userChoosen.todo);
    const [todoCategoryColor, setTodoCategoryColor] = useState("green")
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const token = JSON.parse(localStorage.getItem("taskManagerToken")) || ""; 


    const handleAdd = (e)=>{
        e.preventDefault();

        if(text.length === 0)
            return alert("Empty Field")

        let item = {
            title: text,
            status: false
        }
        setTodo([
            ...todo,
            item
        ])
        setText("")
    }

    const toggleStatus = (indexValue)=>{
        const updatedData = todo.map((item, index) =>
            index === indexValue
                ? {
                    ...item,
                    status: !item.status
                }
                : item
        );
        setTodo(updatedData);
    }

    const handleDelete = (indexValue) => {
        const updatedData = todo.filter((item, index) => index !== indexValue);
        setTodo(updatedData);
    };

    const handleConfirm = async(e)=>{
        e.preventDefault();

        await axios({
            url: "http://localhost:8080/task",
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json;charset=UTF-8"
            },
            data: {
                "userName": token.user,
                "userID": token._id,
                "list": todo
            }
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch((e) => {
              console.log(e);
            });
      
          
            setTodo([]);
    }

    useEffect(()=>{

        if(todoCategory === "Bug")
            setTodoCategoryColor("red")
        else if(todoCategory === "Feature")
            setTodoCategoryColor("blue")
        else
            setTodoCategoryColor("orange")

    },[todoCategoryColor, todoCategory])

  return (
    <Box 
        w={['100%','70%', '70%', '70%','50%']} 
        m={'auto'} 
        mt={'150px'}
        boxShadow='outline' p='6' rounded='md' bg='white'
    > 
        <Box textAlign={'center'} mb={5}>

        <Button display={'inline-block'} size='lg' onClick={()=>navigate("/seeTask")}>
            <ViewIcon boxSize={5} /> See All Tasks
        </Button>

        <Button ml={'20px'} display={'inline-block'} size='lg' onClick={()=>navigate("/chooseTask")}>
            <AddIcon boxSize={5} color='teal'/> Assign Task
        </Button>

        </Box>
        <Box display={'flex'} justifyContent={'space-between'} fontSize={'2xl'}>
            <Box display={'flex'} gap={2}>
                <Text>Task Assign To:</Text>
                <Text color={todoCategoryColor}>{assignTo}</Text>
            </Box>
            <Box display={'flex'} gap={2}>
                <Text>Todo Category:</Text>
                <Text color={todoCategoryColor}>{todoCategory}</Text>
            </Box>
        </Box>

        <Box mt={5} display={'flex'}>
            <Input placeholder='Add' value={text} onChange={(e)=>setText(e.target.value)}/>

            {todo.length === 3 ? "" : 
                <Button ml={2} onClick={handleAdd} disabled={true}>
                    <AddIcon boxSize={5} color='teal'/>
                </Button>
            }
        </Box>

        <Box 
            w={['100%','90%']} 
            m={'auto'} mt={10} 
            fontSize={'2xl'} 
            fontFamily={'cursive'} 
            boxShadow='xl' p='6' rounded='md' bg='white'
        >
            {
                todo.map((el,index)=>(
                    <Box key={index} display={'flex'} justifyContent={'space-between'} mt={5}>
                        <Box w={'60%'}>
                            <li>{el.title}</li>
                        </Box>
                        
                        <Button onClick={()=>toggleStatus(index)} color={el.status ? "green": "red"}>{el.status ? "Completed": "Pending"}</Button>
                        <Button onClick={()=>handleDelete(index)}><DeleteIcon /></Button>
                    </Box>
                ))
            }
        </Box>

        <Box mt={10} textAlign={'center'}>
            {todo.length !== 0 
                ? 
                <Button colorScheme='teal' size='md' onClick={handleConfirm}>Confirm</Button> 
                : ""
            }
        </Box>
    </Box>
  )
}

export default Todo