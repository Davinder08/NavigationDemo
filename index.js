import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store/configureStore';
// import AppContainer from './App';
import AppNavigator from './src/navigator/AppNavigator';

console.disableYellowBox = true;
const store = configureStore();

// const KenkoApp = () => {
// return (
// <Provider store={store}>
{
  /* <PersistGate loading={null} persistor={persistor}> */
  /* <AppNavigator />; */
  /* </PersistGate>; */
  /* </Provider> */
}
// );
// };

const KenkoApp = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

// const App = () => {
// return <AppContainer />;
// };

AppRegistry.registerComponent(appName, () => KenkoApp);
