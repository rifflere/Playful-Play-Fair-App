import { processInput } from '../utils/processInput';
import { Container, Paper, TextField, Typography } from '@mui/material';

interface EncryptColumnProps {
  encryptText: string;
  setEncryptText: (key: string) => void
}

function EncryptColumn({ encryptText, setEncryptText }: EncryptColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
      <Paper elevation={2}>
        <Typography variant="h2">Encrypt</Typography>
        <TextField 
          label="Enter your input" 
          variant="outlined" 
          value={encryptText}
          onChange={(e) => setEncryptText(e.target.value)}
          inputProps={{ maxLength: 100 }}/>
        <Typography variant="body1">Deciphered: </Typography>
        <Typography variant="body2">{ processInput(encryptText) }</Typography>
      </Paper>
    </Container>
  );
}

export default EncryptColumn;