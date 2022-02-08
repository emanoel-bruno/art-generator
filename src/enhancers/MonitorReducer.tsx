/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const round = (number: number) => Math.round(number * 100) / 100;

const MonitorReducerEnhancer = (createStore: any) => (reducer: any, initialState: any, enhancer: any) => {
  const MonitoredReducer = (state: any, action: any) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);
    console.log('reducer process time:', diff);
    return newState;
  };
  return createStore(MonitoredReducer, initialState, enhancer);
};

export default MonitorReducerEnhancer;
