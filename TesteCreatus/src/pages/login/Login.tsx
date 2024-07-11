import { Box } from "@mui/material";
import { Input } from "../../components/input/Input";
import ButtonLogin from "../../components/button/ButtonLogin";

export default function Login () {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundImage: 'url("../src/assets/figura2.png"),url("../src/assets/figura1.png"), linear-gradient(178.05deg, #065D2F 1.65%, #DBEDD6 75.83%)',
            backgroundPosition: '0 115% , 0 48%, center',
            backgroundSize: '1048px 403px, 1048px 804px, cover',
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            justifyContent: 'flex-end'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "white",
                height: '100vh',
                width: '52%',
            }}>
                <Box sx={{padding: '20%'}}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '38px'
                    }}>Bem vindo</h1>
                    <Input
                        labelType="Email"
                        inputType="mail"
                        placeholderText="   Email"
                        largura="455"
                        spaceBottom="25"
                    />
                    <Input
                        labelType="Senha"
                        inputType="password"
                        placeholderText="    Senha"
                        largura="455"
                        spaceBottom="50"
                    />
                    <ButtonLogin />
                </Box>
            </Box>
        </Box>
    )
}