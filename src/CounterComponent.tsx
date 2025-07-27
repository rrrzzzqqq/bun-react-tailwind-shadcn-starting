import React from 'react';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function CounterComponent({ count, onIncrement, onDecrement }: CounterProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{count}</h1>
      <div className="space-x-4 mt-2">
        <button onClick={onIncrement} className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
        <button onClick={onDecrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
      </div>
    </div>
  );
}

export default CounterComponent;