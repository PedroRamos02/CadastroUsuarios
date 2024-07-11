import { Box } from "@mui/material";

interface InputConfig {
    labelType: string;
    inputType: string;
    placeholderText: string;
    largura: string;
    spaceBottom: string
}

export const Input: React.FC<InputConfig> = ({ labelType, inputType, placeholderText, largura, spaceBottom}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: `${spaceBottom}px`
        }}>
            <label htmlFor={labelType}
                style={{
                    fontStyle: '16px',
                    marginBottom: '10px'
                }}
            >{labelType}</label>
            <input type={inputType} id={labelType} placeholder={placeholderText}
                style={{
                    width:`${largura}px`,
                    height:'48px',
                    borderRadius: '9px',
                    borderStyle:'solid',
                    borderWidth: '1px',
                }}
            ></input>
        </Box>
    )
}
