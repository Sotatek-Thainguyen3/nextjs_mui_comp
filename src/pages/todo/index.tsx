import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, FormControlLabel, Stack, Typography} from "@mui/material";
import {AppBox, AppInput} from "../../component/Base";
import {_addTodo} from "../../state";

const Todo = () => {
    const dispatch = useDispatch();
    const {info, todo} = useSelector(state => state) as any;

    const [todoText, setTodoText] = useState(null);

    const handleAddTodo = (event: any) => {
        if (event.target.value === '') {
            return;
        }
        if (event['key'] === 'Enter') {
            dispatch(_addTodo(event.target.value));
            event.target.value = ''
        }
    }

    return (
        <Box textAlign={'center'} mt={3}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                justifyContent: 'center'
            }}>
                <Typography>Todo name:</Typography>
                <AppInput sx={{
                    width: '50%'
                }} onKeyDown={handleAddTodo}/>
            </Box>
            <Stack spacing={2}>
                {
                    todo?.list.map((item: string) => {
                        return (
                            <Box key={item}>{item}</Box>
                        )
                    })
                }
            </Stack>
        </Box>
    );
};

export default Todo;
