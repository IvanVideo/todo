import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

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
        <ListItemButton onClick={handleChangeStatus}>
            <ListItemIcon>
                {status ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
            </ListItemIcon>
            <ListItemText>
                {text}
            </ListItemText>
        </ListItemButton>
    )
}

export default TodoItem;