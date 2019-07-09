import React, { Fragment, useState, FormEvent } from 'react';
interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

interface TodoState {
  userInput: string;
  todoList: any[];
}

const Todo = (props: any) => {
  // const [todoName, setTodoName] = useState('');
  // const [listItems, setListItems]: [any[], Function] = useState([]);

  const [todoState, setTodoState]: [TodoState, Function] = useState({
    userInput: '',
    todoList: []
  });

  const { userInput, todoList } = todoState;

  const inputChangeHandler = (event: any) => {
    event.preventDefault();
    const newItem = event.target.value;
    setTodoState({
      userInput: newItem,
      todoList: todoState.todoList
    });
  };

  const todoHandler = () => {
    setTodoState({
      unserInput: userInput,
      todoList: [...todoList, userInput]
    });
  };

  return (
    <Fragment>
      <label id="Todo">Todo</label>
      <input
        type="text"
        placeholder="Todo"
        id="Todo"
        onChange={inputChangeHandler}
        value={userInput}
      />
      <button type="button" onClick={todoHandler}>
        Add
      </button>
      <ul>
        {todoList.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;
