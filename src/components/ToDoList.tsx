import React, { useState } from 'react';
import { ToDoItem } from '../redux/todolist';

type ToDoListProps = {
    todolist: ToDoItem[],
    onAddList: (item: ToDoItem) => void;
}

const ToDoList = ({ todolist, onAddList }: ToDoListProps) => {    
    const [item, setItem] = useState<ToDoItem>({
        value: '',
        id: '',
    });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setItem({ value, id: `${todolist.length}` });
    }

    const renderDom = (item: ToDoItem, index: number): JSX.Element => {
        return <span key={index}>{+item.id + 1} : {item.value}</span>
    }

    return (
        <div className='todo_container'>
            <div className='todo_wrapper'>
                <div className='todo_list'>
                    {todolist.map(renderDom)}
                </div>
                <input type='text' value={item.value} onChange={onChangeInput}/>
                <button onClick={() => onAddList(item)}>리스트 추가</button>
            </div>
        </div>
    )
}

export default ToDoList;