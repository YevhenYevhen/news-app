import { createStore } from "redux";
import articlesReducer from "./articlesReducer";

const store = createStore(articlesReducer);
export default store;

