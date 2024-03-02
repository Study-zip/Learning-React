const Component = () => {
  const [state, setState] = useGlobalState();

  return <div>{JSON.stringify(state)}</div>;
};

const Comoonent2 = () => {
  const [state, setState] = useGlobalState();

  return <div>{JSON.stringify(state)}</div>;
};
