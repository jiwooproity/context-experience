import counterStore, { CounterTypes } from "./counterStore";
import todolistStore, { ToDoListTypes } from "./todolistStore";

type MainStoreReturnType = {
    counterStore: CounterTypes;
    todolistStore: ToDoListTypes;

const indexStore = (): MainStoreReturnType => ({
    counterStore,
    todolistStore,
})

export default indexStore;