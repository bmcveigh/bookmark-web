import * as React from 'react';
import PageContents from "./modules/PageContents/PageContents";

import {Provider} from "react-redux";

import configureStore from './store';

class App extends React.Component {
  public render() {
    return (
        <Provider store={configureStore()}>
          <div className="App">
            <PageContents />
          </div>
        </Provider>
    );
  }
}

export default App;
