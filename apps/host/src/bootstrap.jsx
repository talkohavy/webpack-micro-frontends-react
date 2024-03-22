import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import App from './App';
import GlobalErrorBoundaryDevelopment from './components/ErrorBoundaries/GlobalErrorBoundaryDevelopment';
import DarkThemeProvider from './providers/DarkThemeProvider';
import { configureMyStore } from './store/index';
import './index.css';

/** @typedef {import('./store/types').State} State */

const isLogged = !!localStorage.getItem('isLogged');

/** @type {Partial<State>} */
const preloadedState = { user: { isLogged } };

const { store, history } = configureMyStore({ preloadedState });

function Client() {
  return (
    <React.StrictMode>
      <GlobalErrorBoundaryDevelopment>
        <StoreProvider store={store}>
          <HistoryRouter history={history}>
            <DarkThemeProvider>
              <App />
            </DarkThemeProvider>
          </HistoryRouter>
        </StoreProvider>
      </GlobalErrorBoundaryDevelopment>
    </React.StrictMode>
  );
}

/** @type {any} */
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Client />);
