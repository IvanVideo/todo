import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/todoForm/TodoForm';
import TodoItem from './components/todoItem/TodoItem';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const FormContainer = styled.div`
  min-height: 70vh;
`

function App() {
  const [visibleItem, setVisibleItem] = React.useState(6);
  const [taskData, setTaskData]: any = React.useState([
    {
      id: 1,
      text: 'Play football with friends',
      status: false
    },
    {
      id: 2,
      text: 'Visit mom',
      status: true
    },
  ])

  const addNewTask = (data: string) => {
    if (data.length > 0) {
      let createId = uuidv4();
      setTaskData([...taskData, { id: createId, text: data, status: false }])
    }
    return
  }

  const filterActiveItem = () => {
    let duplicateData = taskData;
    let activeItems = duplicateData.filter((item: { status: boolean; }) => item.status === true);
    setTaskData(activeItems)
  }

  const filterCompletedItem = () => {
    let duplicateData = taskData;
    let activeItems = duplicateData.filter((item: { status: boolean; }) => item.status === false);
    setTaskData(activeItems)
  }

  // статус
  const changeStatusItem = (id: any) => {
    let indexItem = taskData.findIndex((item: { id: any; }) => item.id === id);
  }

  const showMorItems = () => {
    setVisibleItem(visibleItem + 4);
  };

  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <FormContainer>
        <TodoForm addNewTask={addNewTask} />
        {taskData.slice(0, visibleItem).map((item: { id: string | number | Function; text: string; status: boolean; }, index: React.Key | null | undefined) => (
          <TodoItem
            key={index}
            id={item.id}
            text={item.text}
            status={item.status}
            changeStatusItem={changeStatusItem}
          />
        ))}
        <Button
          onClick={showMorItems}
          style={{ margin: '0 auto' }}
        >
          more...
        </Button>
      </FormContainer>
      <Container>
        <Button>All</Button>
        <Button onClick={filterActiveItem}>Active</Button>
        <Button onClick={filterCompletedItem}>Completed</Button>
      </Container>
    </div>
  );
}

export default App;
