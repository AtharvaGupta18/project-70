import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <Appcontainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteScreen },
    ReadStory: { screen: ReadScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if(routeName === 'WriteStory'){
          return(
            <Image
              source = { require('./assets/write.png') }
              style = {{width: 40, height: 40}}
            />
          );
        }
        else if(routeName === 'ReadStory'){
          return(
            <Image
              source = { require('./assets/read.png') }
              style = {{width: 40, height: 40}}
            />
          );
        }
      }
    })
  }
);

const Appcontainer = createAppContainer(TabNavigator);
