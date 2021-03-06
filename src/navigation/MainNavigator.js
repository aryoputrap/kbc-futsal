import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Splash, Login, Home, History, Cek, Admin, Bayar} from '../screens';

export const BottomNavigationShowcase = (props) => {
  const onTabSelect = (selectedIndex) => {
    const routes = props.navigation.state.routes;
    const selectedRoute = routes[selectedIndex];
    props.navigation.navigate(selectedRoute.routeName);
  };

  const renderBookingIcon = (style) => (
    <Icon {...style} name="checkmark-square-outline" />
  );

  const renderHistoryIcon = (style) => <Icon {...style} name="clock-outline" />;

  const renderCekIcon = (style) => <Icon {...style} name="calendar-outline" />;

  return (
    <BottomNavigation
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}>
      <BottomNavigationTab title="Booking" icon={renderBookingIcon} />
      <BottomNavigationTab title="History" icon={renderHistoryIcon} />
      <BottomNavigationTab title="Cek Jadwal" icon={renderCekIcon} />
    </BottomNavigation>
  );
};
export const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    History: History,
    Cek: Cek,
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: BottomNavigationShowcase,
  },
);

const MainNavigator = createSwitchNavigator({
  Splash: Splash,
  AuthStack: Login,
  Admin: Admin,
  Bayar: Bayar,
  Home: {
    screen: BottomTabNavigator,
  },
});

export default createAppContainer(MainNavigator);
