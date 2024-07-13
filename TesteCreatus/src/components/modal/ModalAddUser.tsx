import { Box } from "@mui/material";
import React from "react";
import ButtonSave from "../button/ButtonSave";

interface ModalUserProps {
    isOpen: boolean;
    setModalOpen: any;
}

export const ModalAddUser: React.FC<ModalUserProps> = ({isOpen, setModalOpen}) => {

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
                    <img onClick={setModalOpen} style={{ height: '24px,', position: 'fixed', top: '3%', left: '93%' }} src="./src/assets/x.png"></img>
                    <h2 style={{alignSelf: 'start', marginLeft: '45px', paddingTop: '10px'}}>Adcionar usuário</h2>
                    <div>
                        <p style={{ marginBottom: '0.5px'}}>Nome</p>
                        <p style={{
                            width: '570px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #E2E8F0',
                            alignContent: 'center',
                            paddingLeft: '10px',
                            marginTop: '0'
                        }}>Jorge</p>
                    </div>
                    <div>
                        <p style={{ marginBottom: '0.5px'}}>Email</p>
                        <p style={{
                            width: '570px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #E2E8F0',
                            alignContent: 'center',
                            paddingLeft: '10px',
                            marginTop: '0'
                        }}>Jorge</p>
                    </div>
                    <div>
                        <p style={{ marginBottom: '0.5px'}}>Nível de Acesso</p>
                        <p style={{
                            width: '570px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #E2E8F0',
                            alignContent: 'center',
                            paddingLeft: '10px',
                            marginTop: '0'
                        }}>Jorge</p>
                    </div>
                    <div>
                        <p style={{ marginBottom: '0.5px'}}>Senha</p>
                        <p style={{
                            width: '570px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #E2E8F0',
                            alignContent: 'center',
                            paddingLeft: '10px',
                            marginTop: '0'
                        }}>Jorge</p>
                    </div>
                    <div>
                        <p style={{ marginBottom: '0.5px'}}>Confirmar senha</p>
                        <p style={{
                            width: '570px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #E2E8F0',
                            alignContent: 'center',
                            paddingLeft: '10px',
                            marginTop: '0'
                        }}>Jorge</p>
                    </div>
                    <div style={{alignSelf: 'end', margin: '20px 50px 0 0' }}>
                        <ButtonSave />
                    </div>
                </Box>
            </Box>
        )
    }

    return null
}