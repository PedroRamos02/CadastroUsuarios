import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalUser } from "../modal/ModalUser";
import { getUsers } from "../../api/Api";
import { ButtonDelete } from "../button/ButtonDelete";
import { useNavigate } from "react-router-dom";


export const Card: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);
    const navigate = useNavigate();

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

    const handleEditClick = (userId: string) => {
        setEditingUserId(userId);
        setOpen(true);
    };

    const handleCardClick = (userId: string) => {
        navigate(`/user/${userId}`);
    };

    return (
        <>
        <Box sx={{
                display: 'flex',
                alignItems: 'center top',
                minHeight: '100px',
                flexDirection: 'column'
            }}>
                {users.map(user => (
                    <Box key={user.id} sx={{
                        display: 'flex',
                        height: '80px',
                        borderBottom: '1px solid #E0E2E7',
                        paddingTop: '20px',
                        cursor: 'pointer'
                    }}
                    >
                        <div style={{
                            display: 'flex'
                        }} onClick={() => handleCardClick(user.id)}>
                            <p style={{ width: '300px', margin: ' 0 0 0 50px' }}>{user.name}</p>
                            <p style={{ width: '400px', margin: '0' }}>{user.email}</p>
                            <p style={{ width: '50px', margin: ' 0 110px 0 120px' }}>1</p>
                        </div>
                        <img onClick={() => handleEditClick(user.id)} style={{ height: '30px', marginRight: '30px', cursor: 'pointer' }} src="./src/assets/edit.png" alt="edit" />
                        <ButtonDelete userId={user.id} onUserDeleted={handleUserDeleted} />
                    </Box>
                ))}
            </Box>
            {editingUserId && (
                <ModalUser isOpen={open} setModalOpen={setOpen} userId={editingUserId} onUserUpdated={handleUserUpdated} />
            )}
        </>
    )
}