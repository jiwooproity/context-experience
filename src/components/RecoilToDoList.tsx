import React, { ChangeEvent } from "react";

interface RecoilToDoListPropsType {
  todolist: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddList: () => void;
}

const RecoilToDoList = ({
  todolist,
  value,
  onChange,
  onAddList,
}: RecoilToDoListPropsType): JSX.Element => {
  return (
    <div className="todo_container">
      <div className="todo_wrapper">
        <div className="todo_list">
          {todolist.map((val, idx) => (
            <span key={idx}>{val}</span>
          ))}
        </div>
        <input value={value} onChange={onChange} />
        <button onClick={onAddList}>내용 추가하기</button>
      </div>
    </div>
  );
};

export default RecoilToDoList;
