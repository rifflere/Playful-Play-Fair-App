import { Container, Paper, TextField, Typography } from '@mui/material';

interface OutputColumnProps {
  mode: 'encrypt' | 'decrypt';
  outputText: string;
  setOutputText: (key: string) => void
}

function OutputColumn({ mode, outputText, setOutputText}: OutputColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h2">Output</Typography>
        <Typography variant="body1">MODE: *{mode}*</Typography>
        <Typography variant="body1">Encrypted:</Typography>
        <Typography variant="body2">{ outputText }</Typography>
        <TextField 
          label="Enter your input" 
          variant="outlined" 
          value={outputText}
          onChange={(e) => setOutputText(e.target.value)} />
        </Paper>
    </Container>
  );
}

export default OutputColumn;