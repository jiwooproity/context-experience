import React, { useState } from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

const Counter = ({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) => {
  const [limit, setLimit] = useState<number>(5);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setLimit(value);
  };

  return (
    <div className="count_container">
      <div>
        <h1>{count}</h1>
        <input type="number" value={limit} onChange={onChange}></input>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(limit)}>{`+${limit}`}</button>
      </div>
    </div>
  );
};

export default Counter;
