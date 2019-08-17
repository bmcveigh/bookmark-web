import * as React from 'react';
import AppContainer from "./components/containers/AppContainer/AppContainer";
import Routes from "./routes/Routes";

import {Provider} from "react-redux";

import configureStore from './store';

class App extends React.Component {
  public render() {
    return (
        <Provider store={configureStore()}>
            <AppContainer>
                <div className="App">
                    <Routes />
                </div>
            </AppContainer>
        </Provider>
    );
  }
}

export default App;
