import React, { ChangeEvent, useState } from "react";

import { useRecoilState } from "recoil";
import { todolistStore } from "../recoilstore/todolistStore";
import RecoilToDoList from "./RecoilToDoList";

const RecoilToDoListContainer = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  const [todolist, setTodolist] = useRecoilState<string[]>(todolistStore);

  const onAddList = () => {
    const setList = [...todolist, todo];
    setTodolist(setList);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo(value);
  };

  return (
    <RecoilToDoList
      todolist={todolist}
      value={todo}
      onChange={onChange}
      onAddList={onAddList}
    />
  );
};

export default RecoilToDoListContainer;
