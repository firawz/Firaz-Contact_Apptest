import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
} from 'react-native';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactList from './src/Pages/ContactList';
import HomeScreen from './src/Pages/Home';
import store from './src/redux/store';
import EditContact from './src/Pages/EditContact';
import AddContacts from './src/Pages/AddContact';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ContactApps">
                    <Stack.Screen name="ContactApps" component={HomeScreen} />
                    <Stack.Screen name="Contacts" component={ContactList} />
                    <Stack.Screen name="Details" component={EditContact} />
                    <Stack.Screen name="New Contact" component={AddContacts} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
