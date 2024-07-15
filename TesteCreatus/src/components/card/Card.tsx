import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalUser } from "../modal/ModalUser";
import { getUserById, getUsers } from "../../api/Api";
import { ButtonDelete } from "../button/ButtonDelete";


export const Card: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);

    const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserUpdated = () => {
        setEditingUserId(null);
        fetchUsers();
    };

    const handleUserDeleted = () => {
        fetchUsers();
    };

    return (
        <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center top',
            heightMin: '100px',
            flexDirection: 'column'
        }}>
            {users.map(user => (
                <Box sx={{
                    display: 'flex',
                    height: '80px',
                    borderBottom: '1px solid #E0E2E7',
                    paddingTop: '20px'
                }}>
                    <p style={{width: '300px', margin: ' 0 0 0 50px'}} key={user.id} >{user.name}</p>
                    <p style={{width: '400px', margin: '0'}}>{user.email}</p>
                    <p style={{width: '50px', margin: ' 0 110px 0 120px'}}>1</p>
                    <img onClick={() => setOpen(true)} style={{height: '30px', marginRight: '30px'}} src="./src/assets/edit.png" ></img>
                    <ButtonDelete userId={user.id} onUserDeleted={handleUserDeleted} />
                </Box>
            ))}
        </Box>{editingUserId && (
            <ModalUser isOpen={open} setModalOpen={() => setOpen(!open)} userId={editingUserId} onUserUpdated={handleUserUpdated}/>
        )}
        </>
    )
}