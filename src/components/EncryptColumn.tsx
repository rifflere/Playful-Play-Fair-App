import { processInput } from '../utils/processInput';
import { Container, Paper, TextField, Typography } from '@mui/material';

interface EncryptColumnProps {
  inputText: string;
  setInputText: (key: string) => void
}

function EncryptColumn({ inputText, setInputText }: EncryptColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
      <Paper elevation={2}>
        <Typography variant="h2">Encrypt</Typography>
        <TextField 
          label="Enter your input" 
          variant="outlined" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}/>
        <Typography variant="body1">Text to encrypt: </Typography>
        <Typography variant="body2">{ processInput(inputText) }</Typography>
      </Paper>
    </Container>
  );
}

export default EncryptColumn;