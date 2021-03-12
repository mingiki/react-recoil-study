import React from 'react';

import { useRecoilValue } from 'recoil';
import { todoListState , filteredTodoListState } from '../recoil/todo';

import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import OtherComponent from './OtherComponent'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const filterList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {console.log("TodoList Rander")}
      <TodoListFilters />
      
      <br />
      <h2>FilterList</h2>
      ----------------------------------------------------
      <br />

      {filterList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}

      <br />
    
      <h2>List</h2>
      ----------------------------------------------------
      <br />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}

      <br />

      <h2>Other Component</h2>
      ----------------------------------------------------
      <br />

      <OtherComponent />
    </>
  );
};

export default TodoList;