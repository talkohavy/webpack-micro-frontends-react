import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { configureStore } from '@reduxjs/toolkit';
import { userMiddleware, userReducer } from './slices/user';

/** @typedef {import('./types').State} State */

function getAllMiddlewares() {
  return [userMiddleware];
}

/**
 * @param {{
 *   preloadedState?: Partial<State>,
 *   axiosInstance?: any
 * }} props
 */
export function configureMyStore(props) {
  const { preloadedState = {} } = props ?? {};

  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
  });

  const store = configureStore({
    preloadedState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => {
      const middlewares = getAllMiddlewares();
      middlewares.push(routerMiddleware); // <--- for dispatching history actions
      // import.meta.env.MODE !== 'production' && middlewares.push(myLogger);
      return getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares);
    },
    reducer: {
      // @ts-ignore
      router: routerReducer,
      user: userReducer,
    },
  });

  const history = createReduxHistory(store);

  return { store, history };
}
