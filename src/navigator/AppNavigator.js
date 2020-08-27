import React from 'react';
import {View, Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

import {Colors, Dimens} from '../utils/Theme';

const Drawer = createDrawerNavigator();
const Stacks = createStackNavigator();
const Tab = createBottomTabNavigator();
const dimensions = Dimensions.get('window').width;

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={HomeScreen} />
      <Tab.Screen name="TabSettings" component={DetailScreen} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 270,
          }}
          hideStatusBar={true}
          keyboardDismissMode={'on-drag'}
          overlayColor={1}
          initialRouteName="Home"
          overlayColor="rgba(245,43,56,0.19)"
          drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{drawerLabel: 'Home'}}
          />
          <Drawer.Screen name="Notifications" component={DetailScreen} />
          <Drawer.Screen name="TabStack" component={TabStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
