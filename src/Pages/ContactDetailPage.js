import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";
import {IoReturnUpBackOutline} from "react-icons/io5";
import {AiOutlineEdit} from "react-icons/ai";
import {useActionContacts, useContacts} from "../Components/ContactProvider";
import {toast} from "react-toastify";

export default function ContactDetailPage() {
    const {contacts} = useContacts()
    const dispatch = useActionContacts()
    const {id} = useParams()
    const [contactDetail, setContactDetail] = useState(null)
    const navigate = useNavigate()
    const {state} = useLocation()
    useEffect(() => {
        if (state) {
            setContactDetail(state.contact)
        } else {
            const savedContacts = JSON.parse(localStorage.getItem("contactsApp"))
            const selectedContact = savedContacts.find((contact) => contact.id === Number(id))
            setContactDetail(selectedContact)
            if (!selectedContact) {
                navigate('/')
            }
        }
    }, [])

    const handleRemoveContact = () => {
        dispatch({type: 'removeContact', payload: contactDetail});
        toast.success(`${contactDetail.name} has been removed`)
        if (contacts.length > 1) {
            navigate('/')
        } else {
            navigate('/add-contact')
        }
    }
    return (
        contactDetail ?
            <div className='w-full p-5 h-screen flex justify-center '>
                <div className='shadow-lg rounded-md p-5  h-full flex flex-col max-h-[700px] my-auto'>
                    <FaUserCircle className='lg:text-[20rem] text-[15rem] text-gray-700 mb-2'/>
                    <button type='button' className='absolute text-xl' onClick={() => navigate('/')}>
                        <IoReturnUpBackOutline/>
                    </button>
                    <div className='flex justify-between '>
                        <p className='font-bold text-2xl'>{contactDetail.name}</p>
                        <button onClick={() => navigate(`/edit-${contactDetail.id}`, {state: {contactDetail}})}
                                className='bg-amber-400 text-white px-3 py-2 shadow-md shadow-amber-600/50 border-none outline-none'>
                            <AiOutlineEdit className='text-2xl'/>
                        </button>
                    </div>
                    <div className='mb-auto'>
                        <label className='font-medium'>Tel :</label>
                        <p className='text-gray-500 ml-2'>{contactDetail.mobile}</p>
                        <label className='font-medium'>Email :</label>
                        <p className='text-gray-500 ml-2'>{contactDetail.email}</p>
                    </div>
                    <button onClick={handleRemoveContact}
                            className='bg-red-600 py-1.5 text-white text-sm border-none outline-none shadow-md shadow-red-600/50'>
                        REMOVE
                    </button>

                </div>
            </div> : null
    )
}