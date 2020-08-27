import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from '../saga/RootSaga';
import rootReducer from '../reducers/RootReducers';

// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const enhancers =
  process.env.NODE_ENV !== 'production' && window.devToolsExtension
    ? [window.devToolsExtension()]
    : [];

// const persistConfig = {
// key: 'ActivitiesReducer',
// storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = compose(
    applyMiddleware(sagaMiddleware, logger),
    ...enhancers,
  )(createStore)(rootReducer);

  sagaMiddleware.run(sagas);

  return store;
};

// const store = configureStore();
// let persistor = persistStore(store);
//
// export default {
// store,
// persistor,
// };
