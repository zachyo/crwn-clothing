import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger]
middleware.unshift(sagaMiddleware)


const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store);

export {store, persistor};
