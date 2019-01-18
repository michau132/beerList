import React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import { configure } from 'mobx';
import Layout from '../layout/Layout';
import theme from '../utils/theme';
import stores from '../stores';
import ModalSwitch from '../containers/ModalSwitch';

configure({ enforceActions: 'always' });

const App = () => (
  <Provider {...stores}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Route component={ModalSwitch} />
        </Layout>
      </ThemeProvider>
    </HashRouter>
  </Provider>
);


export default App;
