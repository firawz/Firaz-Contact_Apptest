import React, { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/action';
import { windowHeight, windowWidth } from './Home';

export default function AddContactsScreen({ navigation, route }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [photo, setPhoto] = useState('N/A');
    const dispatch = useDispatch();

    const submitButton = (firstName, lastName, age, photo) => {
        if (photo.length == 0) {
            setPhoto('N/A');
        }
        dispatch(addContact(firstName, lastName, age, photo));
        navigation.navigate('Contacts');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>First Name</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="John"
                    onChangeText={text => {
                        setFirstName(text);
                    }}
                />
                <Text style={styles.name}>Last Name</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Doe"
                    onChangeText={text => {
                        setLastName(text);
                    }}
                />
                <Text style={styles.name}>Age</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="18"
                    onChangeText={text => {
                        setAge(text);
                    }}
                    keyboardType="numeric"
                />
                <Text style={styles.name}>Photo URL</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="https://google.com/image/myphotos"
                    onChangeText={text => {
                        setPhoto(text);
                    }}
                />
                <TouchableOpacity
                    style={styles.btnPrimary}
                    onPress={() => {
                        submitButton(firstName, lastName, age, photo);
                    }}
                >
                    <Text style={{ alignSelf: 'center' }}>Add New Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: windowWidth * 0.1,
        alignSelf: 'center',
        flex: 1,
        height: windowHeight,
    },
    inputForm: {
        borderWidth: 2,
        backgroundColor: '#F8F0DF',
        width: windowWidth * 0.8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    btnPrimary: {
        alignSelf: 'center',
        borderRadius: 10,
        width: windowWidth * 0.4,
        backgroundColor: '#F8F0DF',
        borderWidth: 2,
        padding: 15,
        marginTop: 50,
    },
});
