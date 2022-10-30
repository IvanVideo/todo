import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useEffect } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`
interface TodoItemProps {
    id: string | number | Function,
    text: string,
    status: boolean,
    changeStatusItem: Function
}

const TodoItem = ({ id, text, status, changeStatusItem }: TodoItemProps) => {

    const handleChangeStatus = () => {
        changeStatusItem(id)
    }

    return (
        <Container>
            <ListItemButton onClick={handleChangeStatus}>
                <ListItemIcon>
                    {status ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                </ListItemIcon>
                <ListItemText>
                    {text}
                </ListItemText>
            </ListItemButton>
        </Container>
    )
}

export default TodoItem;