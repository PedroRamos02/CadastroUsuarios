import React from "react";
import { ModalAddUser } from "../modal/ModalAddUser";

export default function ButtonAddUser () {
    const [open, setOpen] = React.useState(false);
    
    return (
        <>
        <button onClick={() => setOpen(true)} style={{
            backgroundColor: '#065D2F',
            color: 'white',
            borderRadius: '15px',
            height: '30px',
            width:'160px',
            fontSize: '16px',
            borderStyle: 'none'
        }}>Adicionar usuário</button>
        <ModalAddUser isOpen={open} setModalOpen={() => setOpen(!open)} />
        </>
    )
}