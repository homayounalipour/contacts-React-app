import React, {useContext, useEffect, useReducer} from "react";
import {ContactContext, ContactDispatcherContext} from "../Context/ContactContext";
import {useNavigate} from "react-router-dom";

const initialState = {
    contacts: [],
    searchContacts: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'addContact':
            const updatedContacts = [
                ...state.contacts, {
                    id: Date.now(),
                    ...action.payload
                }
            ]
            return {
                contacts: updatedContacts,
                searchContacts: updatedContacts
            }
        case 'removeContact':
            const filteredContacts = state.contacts.filter((contact) => contact.id !== action.payload.id)
            return {
                contacts: filteredContacts,
                searchContacts: filteredContacts
            }
        case 'editContact':
            const contactsClone = [...state.contacts]
            const index = contactsClone.findIndex((contact) => contact.id === action.payload.id)
            const selectedContact = {...contactsClone[index]}
            selectedContact.name = action.payload.name
            selectedContact.mobile = action.payload.mobile
            selectedContact.email = action.payload.email
            contactsClone[index] = selectedContact
            return {
                contacts: contactsClone,
                searchContacts: contactsClone
            }
        case 'searchContact':
            const searchedContact = state.contacts.filter((contact) => contact.name.toLowerCase().includes(action.payload.toLowerCase())
                || contact.mobile.toLowerCase().includes(action.payload.toLowerCase()) || contact.email.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                searchContacts: searchedContact
            }

        case 'savedContacts':
            return {
                contacts: action.payload,
                searchContacts: action.payload
            }
        default:
            return state
    }
}

export default function ContactProvider({children}) {
    const [contacts, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contactsApp")) || []
        if (savedContacts.length > 0) {
            dispatch({type: 'savedContacts', payload: savedContacts})
        } else {
            navigate('/add-contact')
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("contactsApp", JSON.stringify(contacts.contacts || []))
    }, [contacts.contacts])

    return (
        <ContactContext.Provider value={contacts}>
            <ContactDispatcherContext.Provider value={dispatch}>
                {children}
            </ContactDispatcherContext.Provider>
        </ContactContext.Provider>
    )
}

export const useContacts = () =>
    useContext(ContactContext)
export const useActionContacts = () =>
    useContext(ContactDispatcherContext)
