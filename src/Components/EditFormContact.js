import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Input from "./Input";
import Header from "./Header";

export default function EditFormContact(props) {
    const [formValue, setFormValue] = useState({name: '', mobile: '', email: ''})
    const {onEdit} = props
    const {id} = useParams()
    const navigate = useNavigate()
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setFormValue(state.contactDetail)
            console.log(state.contactDetail, 'state is here')
        } else {
            const savedContacts = JSON.parse(localStorage.getItem('contactsApp'))
            const selectedContacts = savedContacts.find((contact) => contact.id === Number(id))
            setFormValue(selectedContacts)
            if (!selectedContacts) {
                navigate('/')
            }
        }
    }, [])
    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitEdit = (e) => {
        e.preventDefault()
        onEdit(formValue)
    }
    return (
        <div className='flex flex-col h-screen'>
            <Header title='Edit contact' color='text-amber-400'/>

            <form onSubmit={handleSubmitEdit} className='p-5 flex flex-1 flex-col mx-auto w-full max-w-[1200px]'>
                <Input type='text' name='name' onChange={handleChange} value={formValue.name}
                       placeholder='name...' lbl='name'/>
                <Input type='tel' name='mobile' onChange={handleChange} value={formValue.mobile}
                       placeholder='mobile...' lbl='mobile'/>
                <Input type='email' name='email' onChange={handleChange} value={formValue.email}
                       placeholder='email...' lbl='Email'/>

                <button
                    className='py-1.5  text-white  mt-auto font-bold shadow-md shadow-amber-400/50 bg-amber-400'>EDIT
                </button>
            </form>
        </div>
    )
}

