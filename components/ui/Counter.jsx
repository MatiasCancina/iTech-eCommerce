const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex justify-center items-center gap-3 select-none text-lg">
      <button onClick={decrease} className="bg-cyan text-white rounded px-3 py-1 flex items-center justify-center">
        -
      </button>
      <p className="flex justify-center items-center w-5">{counter}</p>
      <button onClick={increase} className="bg-cyan text-white rounded px-3 py-1 flex items-center justify-center">
        +
      </button>
    </div>
  );
};

export default Counter;
