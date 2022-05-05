import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddPage from "./Pages/AddPage";
import ContactDetailPage from "./Pages/ContactDetailPage";
import EditPage from "./Pages/EditPage";

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

    // const handleSearchContacts = (e) => {
    //     const value = e.target.value
    //     setSearch(value)
    //     const searchedContact = allContacts.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase())
    //         || contact.mobile.toLowerCase().includes(value.toLowerCase()) || contact.email.toLowerCase().includes(value.toLowerCase()))
    //     setContacts(searchedContact)
    // }
    // const handleEditContact = (updatedContact) => {
    //     const contactsClone = [...contacts]
    //     const index = contactsClone.findIndex((contact) => contact.id === updatedContact.id)
    //     const selectedContact = {...contactsClone[index]}
    //     selectedContact.name = updatedContact.name
    //     selectedContact.mobile = updatedContact.mobile
    //     selectedContact.email = updatedContact.email
    //     contactsClone[index] = selectedContact
    //     setAllContacts(contactsClone)
    //     navigate('/')
    //     toast.success(`${updatedContact.name} has been changed`)
    // }
    // const handleRemoveContact = (contact) => {
    //     const updatedContact = contacts.filter((contactItem) => contactItem.id !== contact.id)
    //     setAllContacts(updatedContact)
    //     navigate('/')
    //     toast.success(`${contact.name} has been removed`)
    // }


    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-contact' element={<AddPage/>}/>
            <Route path='/contact-:id' element={<ContactDetailPage/>}/>
            <Route path='/edit-:id' element={<EditPage/>}/>
        </Routes>
    );
}

export default App;
