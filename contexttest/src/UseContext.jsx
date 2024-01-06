import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create the context
const CounterContext = createContext();

// Step 2: Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Step 3: Create the provider component
const CounterProvider = ({ children }) => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 4: Create custom hooks for consuming the context
// const useCounter = () => {
//   const context = useContext(CounterContext);
//   if (!context) {
//     throw new Error('useCounter must be used within a CounterProvider');
//   }
//   return context;
// };

// Step 5: Create components that use the counter
const CounterDisplay = () => {
  const { state } = useCounter();
  return <div>Count: {state.count}</div>;
};

const CounterButtons = () => {
  const { dispatch } = useCounter();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

// Step 6: Use the CounterProvider to wrap components that need the counter state
const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
};

export default App;
