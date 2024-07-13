import { Box } from "@mui/material";
import React from "react";
import { ModalUser } from "../modal/ModalUser";

interface CardProps {
    userName: string;
    email: string;
    acessLevel: string;
}

export const Card: React.FC<CardProps> = ({ userName, email, acessLevel}) => {
    const [open, setOpen] = React.useState(false);
    
    return (
        <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center top',
            height: '100px',
            paddingTop: '25px'
        }}>
            <p style={{width: '300px', margin: ' 0 0 0 50px'}}>{userName}</p>
            <p style={{width: '400px', margin: '0'}}>{email}</p>
            <p style={{width: '50px', margin: ' 0 110px 0 120px'}}>{acessLevel}</p>
            <img onClick={() => setOpen(true)} style={{height: '30px', marginRight: '30px'}} src="./src/assets/edit.png" ></img>
            <img style={{height: '30px'}} src="./src/assets/trash.png"></img>
        </Box>
        <ModalUser isOpen={open} setModalOpen={() => setOpen(!open)}/>
        </>
    )
}