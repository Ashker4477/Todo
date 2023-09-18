import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import TaskList from './pages/taskList';
import GetStarted from './pages/getStarted';
import AddTask from './pages/addTask';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './slice/store';
import { Routes } from './routes';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const Appstore = store;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Routes.GetStarted}>
            <Stack.Screen options={{ headerShown: false }} name={Routes?.GetStarted} component={GetStarted} />
            <Stack.Screen options={{ headerShown: false }} name={Routes?.AddTask} component={AddTask} />
            <Stack.Screen options={{ headerShown: false }} name={Routes?.TaskList} component={TaskList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
