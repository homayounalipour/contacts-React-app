import React from "react";
import ContactItem from "./ContactItem";
import {Link, useNavigate} from "react-router-dom";
import {BsPlus} from "react-icons/bs";

export default function ContactsList(props) {
    const {contacts, search} = props
    const navigate = useNavigate()

    return (
        <section className='p-5 mx-auto max-w-[1200px]'>
            {
                !search || contacts.length > 0 ?
                    contacts.map((contact) => (
                        <ContactItem key={contact.id} contact={contact}/>
                    )) : <div className='flex flex-col justify-center items-center '>
                        <h1 className='flex justify-center text-xl lg:text-3xl font-bold mb-5'>you have not this
                            contact</h1>
                        <Link to='/add-contact' className='underline'>
                            add contact
                        </Link>
                    </div>
            }
            <button onClick={() => navigate('/add-contact')}
                    className='flex justify-center items-center cursor-pointer p-0 rounded-full overflow-hidden text-white bg-black fixed bottom-5 outline-none border-none right-5'>
                <BsPlus className=' lg:text-5xl text-4xl'/>
            </button>
        </section>

    )
}