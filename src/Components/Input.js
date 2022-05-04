import React from "react";

export default function Input(props) {
    const {type, name, placeholder, value, onChange, lbl} = props
    return (
        <fieldset className='flex flex-col mb-5'>
            <label htmlFor={name} className='mb-3 lg:text-3xl text-xl'>
                {lbl}
            </label>
            <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
                   className='px-3 py-1 rounded-md shadow-sm focus:shadow-md transition'/>
        </fieldset>
    )
}