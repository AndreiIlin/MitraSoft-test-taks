import { Router } from 'app/router';
import { store } from 'app/store';
import { FC } from 'react';
import { Provider } from 'react-redux';

export const App: FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
