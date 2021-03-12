import React from 'react';

const TodoItem = ({ item }) => {
  return (
    <div>
      { item.name }
    </div>
  );
};

export default TodoItem;