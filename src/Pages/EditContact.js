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
import { updateContact } from '../redux/action';
import { windowHeight, windowWidth } from './Home';

export default function EditContact({ navigation, route }) {
    const contact = route.params.contact;
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [age, setAge] = useState(contact.age);
    const [photo, setPhoto] = useState(contact.photo);

    const handleEditButton = (firstName, lastName, age, photo, id) => {
        const currentContact = { firstName, lastName, age, photo, id };
        dispatch(updateContact(currentContact));
        navigation.navigate('Contacts');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>First Name</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="First Name"
                    onChangeText={text => {
                        setFirstName(text);
                    }}
                >
                    {firstName}
                </TextInput>

                <Text style={styles.name}>Last Name</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="First Name"
                    onChangeText={text => {
                        setLastName(text);
                    }}
                >
                    {contact.lastName}
                </TextInput>
                <Text style={styles.name}>Age</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Age"
                    keyboardType="numeric"
                    onChangeText={text => {
                        setAge(text);
                    }}
                >
                    {contact.age}
                </TextInput>
                <Text style={styles.name}>Photo URL</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder={contact.photo}
                    onChangeText={text => {
                        setPhoto(text);
                    }}
                />
                <TouchableOpacity
                    style={styles.btnPrimary}
                    onPress={() =>
                        handleEditButton(
                            firstName,
                            lastName,
                            age,
                            photo,
                            contact.id
                        )
                    }
                >
                    <Text style={{ alignSelf: 'center' }}>Edit Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: windowWidth * 0.1,
        alignSelf: 'center',
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
        marginVertical: windowHeight * 0.1,
        alignSelf: 'center',
        borderRadius: 10,
        width: windowWidth * 0.4,
        backgroundColor: '#79B4B7',
        borderWidth: 2,
        padding: 15,
    },
});
