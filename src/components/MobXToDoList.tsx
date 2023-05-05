import React, { ChangeEvent } from "react";
import { useObserver } from "mobx-react";

type ToDoListProps = {
    value: string;
    store: { list: string[] };
    onAddList: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MobXToDoList = ({ value, store, onAddList, onChange }: ToDoListProps): JSX.Element => {
    return useObserver(() => (
            <div className="todo_container">
                <div className="todo_wrapper">
                    <div className="todo_list">
                        {store.list.map((val, idx) => (
                            <span key={idx}>{val}</span>
                        ))}
                    </div>
                    <input value={value} onChange={onChange}/>
                    <button onClick={onAddList}>내용 추가하기</button>
                </div>
            </div>
        )
    )
}

export default MobXToDoList;