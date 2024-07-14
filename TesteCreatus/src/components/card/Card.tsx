import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalUser } from "../modal/ModalUser";
import { getUsers } from "../../api/Api";

export const Card: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          const users = await getUsers();
          setUsers(users);
        };
        fetchUsers();
      }, []);

    return (
        <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center top',
            height: '100px',
            paddingTop: '25px'
        }}>
            {users.map(user => (
                <>
                <p style={{width: '300px', margin: ' 0 0 0 50px'}} key={user.id} >{user.name}</p>
                <p style={{width: '400px', margin: '0'}}>{user.email}</p>
                <p style={{width: '50px', margin: ' 0 110px 0 120px'}}>1</p>
                <img onClick={() => setOpen(true)} style={{height: '30px', marginRight: '30px'}} src="./src/assets/edit.png" ></img>
                <img style={{height: '30px'}} src="./src/assets/trash.png"></img>
                </>
            ))}
        </Box>
        <ModalUser isOpen={open} setModalOpen={() => setOpen(!open)}/>
        </>
    )
}