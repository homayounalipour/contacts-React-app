import React from "react";
import EditFormContact from "../Components/EditFormContact";

export default function EditPage(props) {
    const {onEdit} = props
    return (
        <div>
            <EditFormContact onEdit={onEdit}/>
        </div>
    )
}