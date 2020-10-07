import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import AreaScreen from "./component/AreaScreen";
import { createAppContainer } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import SocialStack from "./component/SocialNavigation";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PhotoStack from "./component/StackNavigation";






// denne her navigator tab skal holde styr på de forskellige view

const TabNavigator = createBottomTabNavigator(
    {

        // Her tilføjer vi vores routes
      Home: {

        screen: AreaScreen,

        navigationOptions: {
            // dette er vores navn og icon
          tabBarLabel:"Area Info",

          tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name="information" size={24} color="black" />


          )
        },
      },
        // Her tilføjer vi vores routes
      AnimalsPhoto: {
        screen: PhotoStack,
        navigationOptions: {
            // dette er vores navn og icon
          tabBarLabel:"Photos",
          tabBarIcon: ({ tintColor }) => (
              <AntDesign name="camera" size={24} color="black" />
          )

        },
      },
        // Her tilføjer vi vores routes
      Social: {
        screen: SocialStack,
        navigationOptions: {
            // dette er vores navn og icon
          tabBarLabel:"Animal friends",
          tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name="account-group" size={24} color="black" />
          )
        },
      },


    },

    {
      tabBarOptions: {
        showIcon:true,
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'olive',
        inactiveTintColor: 'gray',
        size:40
      }
    }

)


export default createAppContainer(TabNavigator)
