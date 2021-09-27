import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/globals';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme || darkTheme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
