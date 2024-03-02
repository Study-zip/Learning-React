const init = () => 0;

const Component = () => {
  const [count, setCount] = useState(init);

  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
