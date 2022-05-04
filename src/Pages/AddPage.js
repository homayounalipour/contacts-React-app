import React from "react";
import AddContactForm from "../Components/AddContactForm";

export default function AddPage(props) {
    const {onSubmit} = props
    return (
        <div>
            <AddContactForm onSubmit={onSubmit}/>
        </div>
    )
}