import { Container, Paper, TextField, Typography } from '@mui/material';

interface DecryptColumnProps {
  decryptText: string;
  setDecryptText: (key: string) => void
}

function DecryptColumn({ decryptText, setDecryptText}: DecryptColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2}>
        <Typography variant="h2">Decrypt</Typography>
        <Typography variant="body1">Encrypted:</Typography>
        <Typography variant="body2">{ decryptText }</Typography>
        <TextField 
          label="Enter your input" 
          variant="outlined" 
          value={decryptText}
          onChange={(e) => setDecryptText(e.target.value)} />
        </Paper>
    </Container>
  );
}

export default DecryptColumn;