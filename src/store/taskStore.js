import { createStore } from "redux";

export default () => {
  const store = createStore((state = { tasks: [] }, action) => {});
  return store;
};
