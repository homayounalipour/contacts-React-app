import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "./Input";
import Header from "./Header";
import {useActionContacts} from "./ContactProvider";
import {toast} from "react-toastify";

export default function AddContactForm({onSubmit}) {
    const [formValue, setFormValue] = useState({name: '', mobile: '', email: ''})
    const dispatch = useActionContacts()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValue.name && formValue.mobile && formValue.email) {
            dispatch({type: 'addContact', payload: formValue})
            navigate('/')
            toast.success(`${formValue.name} has been added`)

        } else {
            setError('you have some error')
        }
    }
    return (
        <div className='flex flex-col h-screen'>
            <Header title='Add contact' color='text-amber-400'/>
            <form className='mt-2 flex flex-col flex-1 p-5 max-w-[1200px] mx-auto w-full' onSubmit={handleSubmit}>
                <Input type='text' name='name' onChange={handleChange} value={formValue.name}
                       placeholder='name...' lbl='name'/>
                <Input type='tel' name='mobile' onChange={handleChange} value={formValue.mobile}
                       placeholder='mobile...' lbl='mobile'/>
                <Input type='email' name='email' onChange={handleChange} value={formValue.email}
                       placeholder='email...' lbl='Email'/>
                <button
                    className='py-1.5  text-white mt-auto font-bold shadow-md shadow-amber-400/50 bg-amber-400 '>ADD
                </button>
            </form>
            {
                error && (
                    <div className=' flex justify-center items-center flex-1 max-w-4xxl'>
                        <span
                            className='border-2 border-red-600 w-[50%] m-5 flex justify-center rounded-md font-bold text-black'>
                            {error}
                        </span>
                    </div>
                )
            }
        </div>
    )
}
