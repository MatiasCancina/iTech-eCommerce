const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex justify-center items-center gap-3 select-none text-lg">
      <button onClick={decrease}>
        -
      </button>
      <p>{counter}</p>
      <button onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
