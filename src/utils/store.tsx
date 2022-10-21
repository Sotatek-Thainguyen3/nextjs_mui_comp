import React, {createContext, useReducer} from 'react';

const initialState: {state?: any, dispatch?: any} = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children }: any ) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch(action.type) {
      case 'add':
        return {...state, a: 'abc'};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export { store, StateProvider }