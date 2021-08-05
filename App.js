import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/Reducers';


const App = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
