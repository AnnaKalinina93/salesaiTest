import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { createAPI } from './services/api';
import { rootReducer } from './store/root-reduser';
import { fetchUserDataAction } from './store/cards-data/api-action';
import App from './components/app/app';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});


store.dispatch(fetchUserDataAction());

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>);

reportWebVitals();

