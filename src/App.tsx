import * as React from 'react';
import Routes from "./routes/Routes";

import {Provider} from "react-redux";

import configureStore from './store';

class App extends React.Component {
  public render() {
    return (
        <Provider store={configureStore()}>
          <div className="App">
            <Routes />
          </div>
        </Provider>
    );
  }
}

export default App;
