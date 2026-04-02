import { digramify, processInput } from '../utils/processInput';
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
        
        <Typography variant="body1">Digrams: </Typography>
        { mode==="encrypt" && 
        <>
          <Typography variant="body2">{ processInput(inputText) }</Typography>
        </>}
        { mode==="decrypt" &&
        <>
          <Typography variant="body2">{ digramify(inputText.toUpperCase().replace(/[^A-Z]/g, '')) }</Typography>
        </>}
      </Paper>
      <Paper elevation={2} sx={{ marginTop: 2, p:2}}>
        <Typography variant="body1">Rules</Typography>
        { mode === "encrypt" &&
          <> 
            <Typography variant="body2">1. Break message into digrams (groups of 2 letters)</Typography>
            <Typography variant="body2">2. Change any "J" to an "I"</Typography>
            <Typography variant="body2">3. If a digram has the same letter twice, insert an "X" between them. (If the double letters are "X", insert a "Q" instead.)</Typography>
            <Typography variant="body2">4. If the message has an odd number of letters, add an "X" at the end. (If the last letter is "X", insert a "Q" instead.)</Typography>
          </>
        }
        { mode === "decrypt" &&
          <> 
            <Typography variant="body2">Break coded message into digrams (groups of 2 letters)</Typography>
          </>
        }
    </Paper>
    </Container>
  );
}

export default InputColumn;