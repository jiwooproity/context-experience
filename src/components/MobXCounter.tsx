import React from "react";
import { useObserver } from "mobx-react";

type MobXCounterProps = {
    currentCount: number;
    counterStore: { num: number };
    onChangeState: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onIncreaseAction: () => void;
    onDecreaseAction: () => void;
    stateIncreaseAction: () => void;
}

const MobXCounter = ({currentCount, counterStore, onChangeState, onIncreaseAction, onDecreaseAction, stateIncreaseAction}: MobXCounterProps): JSX.Element => {
    return useObserver(() => (
        <div className="count_container">
            <div>
                <h1>{counterStore.num}</h1>
                <input type="number" value={currentCount} onChange={onChangeState}/>
                <button onClick={onIncreaseAction}>+1</button>
                <button onClick={onDecreaseAction}>-1</button>
                <button onClick={stateIncreaseAction}>+{currentCount}</button>
            </div>
        </div>
    ))
}

export default MobXCounter;