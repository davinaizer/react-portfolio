import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Router from './routes/Router';
import store from './store/store';
import theme from './styles/theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ThemeProvider>
);

export default App;
