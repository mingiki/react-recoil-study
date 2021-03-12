import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListSearchValueState } from '../recoil/todo';

const TodoListFilters = () => {
  const [searchValue, setSearchValue] = useRecoilState(todoListSearchValueState);

  return (
    <>
    {console.log("TodoListFilters Rander")}
      Search:
      <input type="text" value={searchValue} onChange={e=> setSearchValue(e.target.value)}/>
    </>
  );
};

export default TodoListFilters;