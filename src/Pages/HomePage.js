import React from "react";
import ContactsList from "../Components/ContactsList";
import Header from "../Components/Header";
import {IoIosSearch} from "react-icons/io";

export default function HomePage(props) {
    const {contacts, onSearch, search} = props
    return (
        <main>
            <Header title='Contacts'>
                <div className='relative'>
                    <input type='text' onChange={onSearch} value={search}
                           className='border border-black rounded-full px-3 py-1'
                           placeholder='search...'/>
                    <IoIosSearch className='absolute right-2 top-[0.6rem]'/>
                </div>
            </Header>
            <ContactsList contacts={contacts} search={search}/>
        </main>
    )
}