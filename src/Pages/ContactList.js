import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import { windowHeight, windowWidth } from './Home';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../redux/action';
import { ContactCard } from '../components/contactCard';

// import { NavigationContainer } from '@react-navigation/native';

export default function ContactList({ navigation }) {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [current, setCurrent] = useState(-1);
    const [id, setId] = useState('');

    useEffect(() => {
        dispatch(getContacts());
    }, []);

    useEffect(() => {
        console.log(current);
    }, [current]);

    return (
        <View>
            <ScrollView>
                <View style={{ marginBottom: windowWidth * 0.5 }}>
                    {contacts?.map((contact, i) => {
                        return (
                            <TouchableOpacity
                                key={contact.id ? contact.id : i}
                                style={styles.contactContainer}
                                onPress={() => {
                                    setCurrent(i);
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        {contact.photo != 'N/A' ? (
                                            <View>
                                                <Image
                                                    source={{
                                                        uri: contact.photo,
                                                    }}
                                                    style={styles.pictures}
                                                />
                                            </View>
                                        ) : (
                                            <View>
                                                <Image
                                                    source={require('../../assets/Google_Contacts_logo.png')}
                                                    style={styles.pictures}
                                                />
                                            </View>
                                        )}
                                        <View style={styles.textContainer}>
                                            {current == i ? (
                                                <Text>
                                                    First Name :{' '}
                                                    {contact.firstName}
                                                </Text>
                                            ) : (
                                                <Text>
                                                    {contact.firstName}{' '}
                                                    {contact.lastName}
                                                </Text>
                                            )}
                                            {current == i && (
                                                <Text>
                                                    Last Name:{' '}
                                                    {contact.lastName}
                                                </Text>
                                            )}
                                            {current == i && (
                                                <Text>Age : {contact.age}</Text>
                                            )}
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate('Details', {
                                                    contact,
                                                });
                                            }}
                                            style={{
                                                marginRight: windowWidth * 0.05,
                                            }}
                                        >
                                            <Feather
                                                name="edit"
                                                size={windowWidth * 0.05}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setDeleteModalVisible(true);
                                                setId(contact.id);
                                            }}
                                        >
                                            <AntDesign
                                                name="close"
                                                size={windowWidth * 0.05}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={deleteModalVisible}
            >
                <View style={styles.modalCentered}>
                    <View style={styles.modalContainer}>
                        <Text
                            style={{
                                fontSize: 32,
                                textAlign: 'center',
                            }}
                        >
                            Delete Contacts?
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row-reverse',
                                alignSelf: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <TouchableOpacity
                                style={styles.modalBtn}
                                onPress={() => {
                                    setDeleteModalVisible(!deleteModalVisible);
                                    setId('');
                                }}
                            >
                                <Text>NO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalBtn}
                                onPress={() => {
                                    setDeleteModalVisible(!deleteModalVisible);
                                    dispatch(deleteContact(id));
                                }}
                            >
                                <Text>YES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.addBtn}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('New Contact');
                    }}
                >
                    <Feather
                        name="plus-circle"
                        size={windowWidth * 0.2}
                        color="black"
                        style={{
                            backgroundColor: '#ebebeb',
                            borderRadius: 50,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: windowWidth * 0.5,
    },
    contactContainer: {
        marginHorizontal: windowWidth * 0.05,
        marginTop: windowWidth * 0.05,
        padding: windowWidth * 0.02,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#F8F0DF',
    },
    pictures: {
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
        resizeMode: 'cover',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textContainer: {
        marginHorizontal: windowWidth * 0.05,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    addBtn: {
        position: 'absolute',
        bottom: windowHeight * 0.1,
        alignSelf: 'center',
    },
    modalCentered: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalContainer: {
        backgroundColor: '#ebebeb',
        width: windowWidth * 0.6,
        padding: windowWidth * 0.05,
        borderRadius: 20,
    },
    modalBtn: {
        padding: windowWidth * 0.05,
    },
    contactModal: {
        position: 'relative',
    },
});
