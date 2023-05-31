import React, { ChangeEvent } from "react";

interface ReduxToolkitCounterPropsType {
    count: number,
    limit: number,
    onIncrease: () => void,
    onDecrease: () => void,
    onIncreaseLimit: () => void,
    onChangeLimit: (e: ChangeEvent<HTMLInputElement>) => void,
    onReset: () => void
}

const ReduxToolkitCounter = ({ count, limit, onIncrease, onDecrease, onIncreaseLimit, onChangeLimit, onReset }: ReduxToolkitCounterPropsType) => {
    return (
        <div className="count_container">
            <div>
                <h1>{count}</h1>
                <input type="number" value={limit} onChange={onChangeLimit}></input>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <button onClick={onIncreaseLimit}>{`+${limit}`}</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default ReduxToolkitCounter;