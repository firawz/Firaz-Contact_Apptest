import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {
    const [name, setName] = useState('John Doe');
    const [check, setCheck] = useState(false);
    const handleSubmit = () => {
        navigation.navigate('Contacts');
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../../assets/Google_Contacts_logo.png')}
                style={styles.logo}
            />
            <View style={styles.bar}></View>
            <View>
                <Text style={styles.name}>Your contact App</Text>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.btnPrimary}
                >
                    <Text style={{ alignSelf: 'center' }}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFBF3',
        alignItems: 'center',
    },
    profilePictures: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        alignSelf: 'flex-start',
        margin: windowWidth * 0.05,
    },
    logo: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        borderRadius: 40,
        resizeMode: 'center',
        marginVertical: windowWidth * 0.2,
    },
    bar: {
        width: windowWidth * 0.8,
        borderRadius: 50,
        borderWidth: 2,
        marginVertical: 20,
    },
    inputForm: {
        borderWidth: 2,
        backgroundColor: 'green',
        width: windowWidth * 0.5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    name: {
        alignSelf: 'center',
    },
    btnPrimary: {
        marginVertical: windowHeight * 0.1,
        alignSelf: 'center',
        borderRadius: 10,
        width: windowWidth * 0.4,
        backgroundColor: '#79B4B7',
        borderWidth: 2,
        padding: 15,
    },
});
