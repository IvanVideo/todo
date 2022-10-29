import { Input, Button } from '@mui/material';
import React from 'react';
import { ChangeEvent } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
`

interface TodoFormProps {
    addNewTask: Function,
}

const TodoForm = ({ addNewTask }: TodoFormProps) => {
    const [newTask, setNewTask] = React.useState('');

    const handleSubmitForm = (event: { preventDefault: () => void; }) => {
        event?.preventDefault()
        addNewTask(newTask);
    }

    const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <Container>
                <Input
                    style={{ height: '50px' }}
                    fullWidth={true}
                    placeholder='task...'
                    onChange={(e) => { handleChangeValue(e) }} />
                <Button
                    style={{ position: 'absolute', right: '0' }}
                    size='large'
                    type='submit'>
                    ADD...
                </Button>
            </Container>
        </form>
    )
}

export default TodoForm;