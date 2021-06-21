import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import './config/configReactotron';

import ThemeWrapper from './styles/ThemeWrapper';
import GlobalStyle from './styles/global';
import Routes from './routes';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeWrapper>
            <Routes />
            <GlobalStyle />
          </ThemeWrapper>
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
