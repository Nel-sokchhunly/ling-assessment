import { legacy_createStore as createStore } from "redux";

import rootReducer from "@src/reducers";

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
