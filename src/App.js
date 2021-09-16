import React, { useState, useRef, useEffect } from 'react';

import './App.css';

function App() {
  const [userTask, setUserTask] = useState(null);
  const [taskList, setTaskList] = useState([
    {
      id: Math.random(),
      task: 'Finish react hook crash course',
    },
  ]);
  const [hasError, setHasError] = useState(false);
  const emptyMessage = 'Get started by adding a new task.';

  const inputRef = useRef(null);

  const handleChange = (e) => setUserTask(e.target.value);

  const handleClick = () => {
    if (userTask) {
      const userDetailedTask = {
        id: Math.random(),
        task: userTask,
      };
      setTaskList([...taskList, userDetailedTask]);
      setUserTask('');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [hasError]);

  return (
    <div className="App">
      <div className="container">
        <div className="container-title">
          <h1>Task List</h1>
        </div>
        <ul className="task-list">
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <li key={task.id}>
                <p>{task.task}</p>
                <button onClick={() => handleDelete(task.id)}>delete</button>
              </li>
            ))
          ) : (
            <h2>{emptyMessage}</h2>
          )}
        </ul>
        <div className="input-task-container">
          <input
            placeholder="add a task"
            onChange={handleChange}
            value={userTask}
            ref={inputRef}
            className={hasError ? 'emptyInputError emptyInputBorderError' : ''}
          />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
