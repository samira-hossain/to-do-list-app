import React, { useState } from "react";
import Checkbox from "./checkbox";
//import './App.css';

const Todo = () => {
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false
  });

  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false
      }
    ]);

    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false
    });
  }

  const handleToggle = (id) => {
    console.log({ id })
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
    });
    setTodos(mapped);
  };

  return (
    <div className="App">
      <h1>To Do list</h1>
      <form onSubmit={addTodos}>
        <div>
          <label>
            Tasks for today &nbsp;
            <input
              type="text"
              value={task.taskDescription}
              name="taskDescription"
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false
                })
              }
            />
          </label>
          <button>Add To Do</button>
        </div>
      </form>
      <>
        {todos.length > 0 ? (
          <>
            {todos.map((t, index) => {
              return (
                <div id={t.id} key={index + t.id} value={t.id}>
                  {t.isCompleted ? (
                    <strike>
                      <p>{t.taskDescription}</p>
                    </strike>
                  ) : (
                    <Checkbox
                      label={t.taskDescription}
                      value={t.id}
                      checked={t.isCompleted}
                      onChange={(e) => handleToggle(t.id)}
                    />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <p>No tasks for today</p>
        )}
      </>
    </div>
  );
};

export default Todo;
