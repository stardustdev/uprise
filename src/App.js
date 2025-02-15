import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { theme } from './theme';
import store from './store';
import routes from './routes';
import ScrollReset from './components/ScrollReset';
import StylesProvider from './components/StylesProvider';
import history from './utils/history';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/main.scss';

function App() {
  const [direction] = useState('ltr');

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider direction={direction}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router history={history}>
              <ScrollReset />
              {renderRoutes(routes)}
            </Router>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
