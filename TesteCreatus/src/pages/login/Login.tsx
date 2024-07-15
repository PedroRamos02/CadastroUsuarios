import { Box } from "@mui/material";
import ButtonLogin from "../../components/button/ButtonLogin";
import React, { useState } from "react";
import { login } from "../../api/Api";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            if (response && response.token) {
                localStorage.setItem('token', response.token);
                navigate('bolsistas');
            } else {
                setError("Credenciais de login inválidas");
            }
        } catch (err) {
            setError("Credenciais de login inválidas");
        }
    };

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
                borderTopLeftRadius: '14px',
                borderBottomLeftRadius: '14px'
            }}>
                <Box sx={{padding: '20%'}}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '38px'
                    }}>Bem vindo</h1>
                    <form onSubmit={handleSubmit}>
                        <p style={{
                            fontStyle: '16px',
                            marginBottom: '10px'
                        }}>Email</p>
                        <input style={{
                            width:'460px',
                            height:'48px',
                            borderRadius: '9px',
                            borderStyle:'solid',
                            borderWidth: '1px',
                        }}
                            type="email"
                            placeholder="   Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p style={{
                            fontStyle: '16px',
                            marginBottom: '10px'
                        }}>Senha</p>
                        <input style={{
                            width:'460px',
                            height:'48px',
                            borderRadius: '9px',
                            borderStyle:'solid',
                            borderWidth: '1px',
                        }}
                            type="password"
                            placeholder="   Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div style={{marginTop: '40px'}}>
                            <ButtonLogin />
                        </div>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}
