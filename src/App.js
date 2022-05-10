import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import HomePage from "./Pages/HomePage";
import AddPage from "./Pages/AddPage";
import ContactDetailPage from "./Pages/ContactDetailPage";
import EditPage from "./Pages/EditPage";
import {toast} from 'react-toastify'

const initialData = [
    {
        id: 1,
        name: 'ali',
        mobile: '09192150846',
        email: 'homayounalipour@yahoo.com'
    }, {
        id: 2,
        name: 'hamed',
        mobile: '09192150846',
        email: 'homayounalipour@yahoo.com'
    }, {
        id: 3,
        name: 'armin',
        mobile: '09192150846',
        email: 'homayounalipour@yahoo.com'
    },

]

function App() {
    const [contacts, setContacts] = useState([])
    const [allContacts, setAllContacts] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contactsApp")) || []
        if (savedContacts.length > 0) {
            setAllContacts(savedContacts)
            setContacts(savedContacts)
        } else {
            navigate('/add-contact')
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("contactsApp", JSON.stringify(allContacts))
        setContacts(allContacts)
    }, [allContacts])

    const handleSearchContacts = (e) => {
        const value = e.target.value
        setSearch(value)
        const searchedContact = allContacts.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase())
            || contact.mobile.toLowerCase().includes(value.toLowerCase()) || contact.email.toLowerCase().includes(value.toLowerCase()))
        setContacts(searchedContact)
    }
    const handleEditContact = (updatedContact) => {
        const contactsClone = [...contacts]
        const index = contactsClone.findIndex((contact) => contact.id === updatedContact.id)
        const selectedContact = {...contactsClone[index]}
        selectedContact.name = updatedContact.name
        selectedContact.mobile = updatedContact.mobile
        selectedContact.email = updatedContact.email
        contactsClone[index] = selectedContact
        setAllContacts(contactsClone)
        navigate('/')
        toast.success(`${updatedContact.name} has been changed`)
    }
    const handleRemoveContact = (contact) => {
        const updatedContact = contacts.filter((contactItem) => contactItem.id !== contact.id)
        setAllContacts(updatedContact)
        toast.success(`${contact.name} has been removed`)
        if (contacts.length > 1) {
            navigate('/')
        } else {
            navigate('/add-contact')
        }
    }

    const handleAddContact = (contact) => {
        setAllContacts([
            ...contacts, {
                id: Date.now(),
                ...contact
            }
        ])
        toast.success(` ${contact.name} successfully added`)
    }
    return (
        <Routes>
            <Route path='/'
                   element={<HomePage contacts={contacts} onRemove={handleRemoveContact}
                                      onSearch={handleSearchContacts} search={search}/>}/>
            <Route path='/add-contact' element={<AddPage onSubmit={handleAddContact}/>}/>
            <Route path='/contact-:id' element={<ContactDetailPage onRemove={handleRemoveContact}/>}/>
            <Route path='/edit-:id' element={<EditPage onEdit={handleEditContact}/>}/>
        </Routes>
    );
}

export default App;
