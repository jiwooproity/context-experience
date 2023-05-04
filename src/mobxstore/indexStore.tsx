import counterStore, { CounterTypes } from "./counterStore";

type MainStoreReturnType = {
    counterStore: CounterTypes
}

const indexStore = (): MainStoreReturnType => ({
    counterStore,
})

export default indexStore;