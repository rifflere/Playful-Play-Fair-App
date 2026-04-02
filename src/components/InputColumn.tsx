import { processInput } from '../utils/processInput';
import { Container, Paper, TextField, Typography } from '@mui/material';

interface InputColumnProps {
  mode: 'encrypt' | 'decrypt';
  inputText: string;
  setInputText: (key: string) => void
}

function InputColumn({ mode, inputText, setInputText }: InputColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
      <Paper elevation={2}>
        <Typography variant="h2">Input</Typography>
        <Typography variant="body1">MODE: *{mode}*</Typography>
        <TextField 
          label="Enter your input" 
          variant="outlined" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}/>
        <Typography variant="body1">Deciphered: </Typography>
        <Typography variant="body2">{ processInput(inputText) }</Typography>
      </Paper>
    </Container>
  );
}

export default InputColumn;