import { combineReducers } from "redux";
import counter from "./counter";
import todolist from "./todolist";

const rootReducer = combineReducers({
  counter,
  todolist,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
