import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [{id: 1 , name : "1번째 아이템"}, {id: 2 , name : "2번째 아이템"}, {id: 3 , name : "3번째 아이템"}],
})

export const todoListSearchValueState = atom({
  key: 'todoListSearchValueState',
  default: '',
}); 

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const search = get(todoListSearchValueState);
    const list = get(todoListState);

    let filterList = list.filter((item)=>{
      return item.name.includes(search);
    });

    console.log(filterList);

    return filterList;
  },
}); 
