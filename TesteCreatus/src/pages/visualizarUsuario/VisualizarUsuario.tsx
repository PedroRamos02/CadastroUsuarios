import { Box } from "@mui/material";
import ButtonReturn from "../../components/button/ButtonReturn";

export default function VisualizarUsuario() {
    return (
        <Box sx={{
            backgroundColor: '#F6F6F6',
            height: '100vh',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                height: '882px',
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
                        <img style={{ marginRight: '20px', zIndex: '1' }} src="./src/assets/userIcon.png"></img>
                        <h2>Jorge</h2>
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
                            }}>Jorge</p>
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
                            }}>Jorge</p>
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
                            }}>Jorge</p>
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
                            }}>Jorge</p>
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
                            }}>Jorge</p>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}