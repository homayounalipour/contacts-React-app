import React from "react";

export default function Header(props) {
    const {title, color, center, children} = props
    return (
        <header className='bg-white p-5 shadow-sm flex justify-between items-center flex-col md:flex-row'>
            <h1 className={`font-bold ${color} ${center && 'text-center'} text-3xl mb-2 md:mb-0`}>{title}</h1>
            {children}
        </header>
    )
}