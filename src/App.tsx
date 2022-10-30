import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/todoForm/TodoForm';
import TodoItem from './components/todoItem/TodoItem';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import styled from 'styled-components'
import { getValue } from '@testing-library/user-event/dist/utils';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const FormContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
`

const AppContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`

function App() {
  const [visibleItem, setVisibleItem] = React.useState(5);
  const [paginationStatus, setPaginationStatus] = React.useState(false);
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

  useEffect(() => {
    if (taskData.length > 5) {
      setPaginationStatus(true);
    }
  }, [taskData, visibleItem])

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


  const changeStatusItem = (id: any) => {
    const newData = taskData.map((item: { [x: string]: any; id: any; }) => item.id === id ? { ...item, status: !item.status } : item)
    setTaskData(newData);
  }

  const showMorItems = () => {
    setVisibleItem(visibleItem + 4);
  };

  return (
    <AppContainer>
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
        {paginationStatus ?
          <Button
            onClick={showMorItems}
            style={{ margin: '0 auto' }}
          >
            more...
          </Button> : null}

      </FormContainer>
      <Container>
        <Button>All</Button>
        <Button onClick={filterActiveItem}>Active</Button>
        <Button onClick={filterCompletedItem}>Completed</Button>
      </Container>
    </AppContainer>
  );
}

export default App;
