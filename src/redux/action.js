export function getContacts() {
    return async (dispatch, getState) => {
        const resp = await fetch(
            'https://simple-contact-crud.herokuapp.com/contact'
        );
        const { data } = await resp.json();
        dispatch({
            type: 'GET_CONTACTS',
            payload: {
                contacts: data,
            },
        });
    };
}

export function addContact(firstName, lastName, age, photo) {
    return async (dispatch, getState) => {
        await fetch(`https://simple-contact-crud.herokuapp.com/contact`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                age,
                photo,
            }),
        });
        const contact = { firstName, lastName, age, photo };
        const contacts = getState().contacts;
        const result = [...contacts, contact];
        dispatch({
            type: 'POST_CONTACTS',
            payload: {
                contacts: result,
            },
        });
    };
}

export function deleteContact(id) {
    return async (dispatch, getState) => {
        await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
            method: 'DELETE',
        });
        const contacts = getState().contacts;
        const result = contacts.filter(contact => contact.id != id);

        dispatch({
            type: 'DELETE_CONTACTS',
            payload: {
                contacts: result,
            },
        });
    };
}

export function updateContact(contact) {
    return async (dispatch, getState) => {
        const { firstName, lastName, photo, age, id } = contact;
        await fetch(
            `https://simple-contact-crud.herokuapp.com/contact/${contact.id}`,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    age,
                    photo,
                }),
            }
        );

        const contacts = getState().contacts;
        contacts.map(contact => {
            if (contact.id == id) {
                contact.age = age;
                contact.firstName = firstName;
                contact.lastName = lastName;
                contact.photo = photo;
            }
        });
        const result = [...contacts];

        dispatch({
            type: 'PUT_CONTACTS',
            payload: {
                contacts: result,
            },
        });
    };
}
