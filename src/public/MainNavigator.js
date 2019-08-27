import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation'
import { Icon } from 'native-base'
import HomeScreen from '../screens/home/home'
import ProfileScreen from '../screens/profile/profile'
import Login from '../screens/login/login'
import RegisterScreen from '../screens/register/register'
import BookDetail from '../screens/bookDetail/bookDetail'
import GetToken from '../screens/getToken/getToken'

const AppNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='home' color={tintColor} size={22} style={{ color: 'white' }} />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='person' color={tintColor} size={22} style={{ color: 'white' }} />
            )
        }
      }
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 9,
                marginTop: 1
            },
            style: {
                backgroundColor: '#f5429e',
                elevation: 15,
                height: 50
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true
        }
    })

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: AppNavigator,
    },
    Profile: {
        screen: ProfileScreen
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: RegisterScreen
    },
    BookDetail: {
        screen: BookDetail
    },
    getToken: {
        screen: GetToken,
        navigationOptions:{
            header:null
        }
    },
},
{
    headerMode: 'none'
})

export default createAppContainer(AppStackNavigator)