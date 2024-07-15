import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../api/Api";
import ButtonSave from "../button/ButtonSave";

interface ModalUserProps {
    isOpen: boolean;
    setModalOpen: any;
    userId: string;
    onUserUpdated: () => void;
}

export const ModalUser: React.FC<ModalUserProps> = ({ isOpen, setModalOpen, userId, onUserUpdated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accessLevel, setAccessLevel] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(userId);
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
            setAccessLevel(user.accessLevel);
        };
        fetchUser();
    }, [userId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = { name, email, password, accessLevel };
        await updateUser(userId, user);
        onUserUpdated();
        setModalOpen(false);
      };

    if (isOpen) {
        return (
            <Box sx={{
                position: 'fixed',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: 'rgb(0,0,0,0.2)',
                zIndex: '1000'
            }}>
                <Box sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    backgroundColor: '#FFFFFF',
                    transform: 'translate(-50%,-50%)',
                    width: '678px',
                    height: '678px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img onClick={() => setModalOpen(false)} style={{ height: '24px,', position: 'fixed', top: '3%', left: '93%', cursor: 'pointer' }} src="./src/assets/x.png"></img>
                    <h2 style={{ alignSelf: 'start', marginLeft: '45px', paddingTop: '50px' }}>Editar usuário</h2>
                    <form  style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none'
                     }} 
                     onSubmit={handleSubmit}>
                        <p style={{ marginBottom: '0.5px'}}>Nome</p>
                        <input
                            style={{
                                width: '570px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginTop: '10px'
                            }}
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <p style={{ marginBottom: '0.5px'}}>Email</p>
                        <input
                            style={{
                                width: '570px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginTop: '10px'
                            }}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p style={{ marginBottom: '0.5px'}}>Nível de acesso</p>
                        <input
                            style={{
                                width: '570px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginTop: '10px'
                            }}
                            type="text"
                            placeholder="Nível de acesso"
                            value={accessLevel}
                            onChange={(e) => setAccessLevel(e.target.value)}
                            required
                        />
                        <p style={{ marginBottom: '0.5px'}}>Senha</p>
                        <input
                            style={{
                                width: '570px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginTop: '10px'
                            }}
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                        <div style={{ 
                            position: 'relative',
                            top: '100px',
                            left: '510px'
                        }}>
                            <ButtonSave />
                        </div>
                    </form>
                </Box>
            </Box>
        )
    }

    return null
}