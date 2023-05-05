import { observable } from "mobx";

export type ToDoListTypes = {
    list: string[];
    addList: (value: string) => void;
}

const todolistStore: ToDoListTypes = observable({
    list: [] as string[],
    addList(value: string) {
        this.list = [...this.list, value];
    }
})

export default todolistStore;