import React, { useState } from "react";
import indexStore from "../mobxstore/indexStore";
import MobXCounter from "./MobXCounter";

const MobXCounterContainer = () => {
    const { counterStore } = indexStore();

    const [currentCount, setCurrentCount] = useState<number>(0);

    const onIncreaseAction = () => {
        counterStore.increaseAction();
    }

    const onDecreaseAction = () => {
        counterStore.decreaseAction();
    }

    const stateIncreaseAction = () => {
        counterStore.stateIncreaseAction(currentCount);
    }

    const onChangeState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        setCurrentCount(value);
    }

    return (
        <MobXCounter
            counterStore={counterStore}
            currentCount={currentCount} 
            onChangeState={onChangeState} 
            stateIncreaseAction={stateIncreaseAction} 
            onIncreaseAction={onIncreaseAction} 
            onDecreaseAction={onDecreaseAction}
        />
    )
}

export default MobXCounterContainer;