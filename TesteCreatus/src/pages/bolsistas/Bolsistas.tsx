import { Box } from "@mui/material";
import ButtonAddUser from "../../components/button/ButtonAddUser";
import { Card } from "../../components/card/Card";

export default function Bolsistas () {

    return (
        <Box sx={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F6F6F6'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '1178px',
                minHeight: '200px',
                borderRadius: '15px',
                boxShadow: '0px 0px 10px 10px #1126920D',
            }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '5px 50px 5px 50px'
            }}>
                <h2>Usuários</h2>
                <ButtonAddUser />
            </header>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 200px 10px 50px',
                backgroundColor: '#f0eded',
            }}>
                <h2>NOME</h2>
                <h2>EMAIL</h2>
                <h2>NÍVEL DE ACESSO</h2>
            </div>
            <Card 
                userName= 'Jorge'
                email="jorge@ig.com"
                acessLevel="3"
            />
            </Box>
        </Box>
    )
}