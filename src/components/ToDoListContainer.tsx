import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux";
import { ToDoItem, addlist } from "../redux/todolist";
import ToDoList from "./ToDoList"
import { useDispatch } from "react-redux";

const ToDoListContainer = () => {
    const todolist = useSelector((state: RootState) => state.todolist.todo);
    const dispatch = useDispatch();

    const onAddList = (item: ToDoItem) => {
        dispatch(addlist(item));
    }

    return (
        <ToDoList todolist={todolist} onAddList={onAddList}/>
    )
}

export default ToDoListContainer