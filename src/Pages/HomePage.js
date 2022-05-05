import React, {useState} from "react";
import ContactsList from "../Components/ContactsList";
import Header from "../Components/Header";
import {IoIosSearch} from "react-icons/io";
import {useActionContacts} from "../Components/ContactProvider";

export default function HomePage() {
    const [search, setSearch] = useState('')
    const dispatch = useActionContacts();
    const handleChangeSearch = (e) => {
        const value = e.target.value
        setSearch(value)
        dispatch({type: 'searchContact', payload: value})

    }
    return (
        <main>
            <Header title='Contacts'>
                <div className='relative'>
                    <input type='text' value={search} onChange={handleChangeSearch}
                           className='border border-black rounded-full px-3 py-1'
                           placeholder='search...'/>
                    <IoIosSearch className='absolute right-2 top-[0.6rem]'/>
                </div>
            </Header>
            <ContactsList search={search}/>
        </main>
    )
}