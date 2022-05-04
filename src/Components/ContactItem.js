import React from "react";
import {FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";

export default function ContactItem(props) {
    const {contact} = props
    const navigate = useNavigate()


    return (


        <div
            className='p-8 text-black cursor-pointer font-bold mt-2 shadow-sm hover:shadow-md transition bg-white p-3 rounded-xl flex flex-grow-1 '>
            <div className='w-full flex justify-between items-center px-3'
                 onClick={() => navigate(`/contact-${contact.id}`, {state: {contact}})}>
                <div className='flex justify-between items-center'>
                    <FaUserCircle style={{fontSize: 40, cursor: "pointer"}}/>
                    <div className='ml-5'>
                        <p className='text-sm md:text-base'>  {contact.name}</p>
                        <p className='text-xs text-gray-500'>  {contact.mobile}</p>
                    </div>
                </div>
            </div>
            <button type='button' onClick={() => navigate(`/edit-${contact.id}`, {state: {contactDetail: contact}})}>
                <AiOutlineEdit className='text-2xl'/>
            </button>
        </div>
    )
}