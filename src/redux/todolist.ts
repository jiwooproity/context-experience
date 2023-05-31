const ADDLIST = 'todolist/ADDLIST' as const;
// const DELETELIST = 'todolist/DELETELIST' as const;

export interface ToDoItem {
    value: string, 
    id: string,
}

export const addlist = (item: ToDoItem) => ({
    type: ADDLIST,
    item: item,
})

type ToDoAction = ReturnType<typeof addlist>

type ToDoState = {
    todo: ToDoItem[]
}

const initialState: ToDoState = {
    todo: []
}

const todolist = (state: ToDoState = initialState, action: ToDoAction): ToDoState => {
    switch (action.type) {
        case ADDLIST:
            return {todo: state.todo.concat([action.item])}
        default:
            return state
    }
}

export default todolist;