import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import nextReduxWrapper from "next-redux-wrapper";
import nextReduxSaga from "next-redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initState = {}) {
  const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
export default function(Component) {
  return nextReduxWrapper(configureStore)(nextReduxSaga(Component));
}
