/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const LoggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info('Dispatching', action);
  const result = next(action);
  console.log('Next state', store.getState());
  console.groupEnd();
  return result;
};

export default LoggerMiddleware;
