import { useReducer } from 'react';

const App = () => {
  const handleIncrement = (value, action) => {
    switch (action.type) {
      case 'increment':
        return value + 1;
      case 'decrement':
        return value - 1;
      default:
        throw new Error();
    }
  };

  const initialValue = 0;

  const [state, dispatch] = useReducer(handleIncrement, initialValue);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      Count : {state}
    </>
  );
};

export default App;
