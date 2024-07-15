import { Box } from "@mui/material";
import ButtonReturn from "../../components/button/ButtonReturn";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/Api";

export const VisualizarUsuario: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const userData = await getUserById(id);
                setUser(userData);
            }
        };
        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{
            backgroundColor: '#F6F6F6',
            height: '100vh',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                height: '660px',
                width: '1300px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px'
            }}>
                <header style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '30px',
                    marginRight: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '60px',
                    }}>
                        <img style={{ marginRight: '20px', zIndex: '1' }} src="../src/assets/userIcon.png"></img>
                        <h2>{user.name}</h2>
                    </Box>
                    <ButtonReturn />
                </header>
                <div>
                    <hr style={{
                        border: '0.1px solid #EEEEEE',
                        position: 'relative',
                        top: '-30px'
                    }}></hr>
                </div>
                <Box sx={{
                    margin: '20px 60px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h2>Informações</h2>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h3>Nome</h3>
                            <p style={{
                                width: '430px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginRight: '30px',
                                color: '#0000005C'
                            }}>{user.name}</p>
                        </div>
                        <div>
                        <h3>Email</h3>
                            <p style={{
                                width: '430px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginRight: '30px',
                                color: '#0000005C'
                            }}>{user.email}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h3>Nível de acesso</h3>
                            <p style={{
                                width: '430px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginRight: '30px',
                                color: '#0000005C'
                            }}>{user.accessLevel}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <h3>Senha</h3>
                            <p style={{
                                width: '430px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginRight: '30px',
                                color: '#0000005C'
                            }}>{user.password}</p>
                        </div>
                        <div>
                        <h3>Confirmar senha</h3>
                            <p style={{
                                width: '430px',
                                height: '40px',
                                borderRadius: '6px',
                                border: '1px solid #E2E8F0',
                                alignContent: 'center',
                                paddingLeft: '10px',
                                marginRight: '30px',
                                color: '#0000005C'
                            }}>{user.password}</p>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}