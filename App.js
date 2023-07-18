import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductStackScreen from './screens/ProductStackScreen';
import CartScreenStack from './screens/CartScreenStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider, useSelector} from 'react-redux';
import store from './store/store';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'checkroom';
              } else if (route.name === 'Shopping Cart') {
                iconName = focused ? 'add-shopping-cart' : 'shopping-cart';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#9e4455',
            tabBarLabelStyle: {
              fontSize: 14,
              height: 25,
              fontWeight: 'bold',
            },
          })}>
          <Tab.Screen name="Home" component={ProductStackScreen} />
          <Tab.Screen
            name="Shopping Cart"
            // options={{tabBarBadge: s}}
            component={CartScreenStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
