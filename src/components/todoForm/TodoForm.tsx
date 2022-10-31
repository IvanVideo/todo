import { Input, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { ChangeEvent } from 'react';
import styled from 'styled-components'

interface TodoFormProps {
    addNewTask: Function,
    inputReset: boolean,
    setInputReset: Function
}

const TodoForm = ({ addNewTask, inputReset, setInputReset }: TodoFormProps) => {
    const [newTask, setNewTask] = React.useState('');

    useEffect(() => {
        if (inputReset) {
            const input: any = document.getElementById('input');
            input.value = '';
            setInputReset(false);
            console.log(input)
        }
        return
    }, [inputReset])

    const handleSubmitForm = (event: { preventDefault: () => void; }) => {
        event?.preventDefault()
        addNewTask(newTask);
    }

    const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    return (
        <form aria-label="form" onSubmit={handleSubmitForm}>
            <Container aria-label="container">
                <Input
                    data-testid='value-elem'
                    type='text'
                    id='input'
                    style={{ height: '50px' }}
                    fullWidth={true}
                    placeholder='task...'
                    onChange={(e) => { handleChangeValue(e) }} />
                <Button
                    data-testid="button"
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

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
`