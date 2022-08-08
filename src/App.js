import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import { ThemeProvider } from 'styled-components';
import Show from './pages/Show';
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show/>
        </Route>
        <Route>
          This is a 404 Page. The Page you are looking is not Available
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
