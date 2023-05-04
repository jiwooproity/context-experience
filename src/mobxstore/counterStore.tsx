import { observable } from "mobx";

export type CounterTypes = {
    num: number;
    increaseAction: () => void;
    decreaseAction: () => void;
    stateIncreaseAction: (num: number) => void;
}

const counterStore: CounterTypes = observable({
    num: 0,
    increaseAction() {
        this.num = this.num + 1;
    },
    decreaseAction() {
        this.num = this.num - 1;
    },
    stateIncreaseAction(num: number) {
        this.num = this.num + num;
    }
})

export default counterStore;