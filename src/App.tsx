import './App.css';
import InputColumn from './components/InputColumn';
import ArrangeColumn from './components/ArrangeColumn';
import OutputColumn from './components/OutputColumn';
import { useState } from 'react';
import { AppBar, Toolbar, Box, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import { processEncrypt, processDecrypt, encrypt, decrypt } from './utils/processInput';

const alphabet = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function App() {
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>("encrypt");
  const [inputText, setInputText] = useState<string>("");
  const [cipherKey, setCipherKey] = useState<string[]>([]);
  // const [outputText, setOutputText] = useState<string>("");
  const remaining = alphabet.filter(l => ! cipherKey.includes(l));
  const fullGrid = [...cipherKey, ...remaining];

  const processedText = mode === 'encrypt' ? processEncrypt(inputText) : processDecrypt(inputText);
  const outputText = mode === 'encrypt' ? encrypt(processedText, fullGrid) : decrypt(processedText, fullGrid);

  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ bgcolor:'RebeccaPurple' }}>
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, textAlign: 'center', color:'white' }}>Playful Play Fair</Typography>
      </Toolbar>
      <ToggleButtonGroup sx={{ bgcolor:'RebeccaPurple', display: 'flex', justifyContent: 'center'}} exclusive>
        <ToggleButton value="encrypt" onClick={() => setMode("encrypt")} selected={mode === "encrypt"}>Encrypt</ToggleButton>
        <ToggleButton value="decrypt" onClick={() => setMode("decrypt")} selected={mode === "decrypt"}>Decrypt</ToggleButton>
      </ToggleButtonGroup>
    </AppBar>

    <Box sx={{ bgcolor:'purple', display:'flex', flexDirection:'row' }}>
      <InputColumn mode={mode} inputText={inputText} setInputText={setInputText} processedText={processedText} />
      <ArrangeColumn mode={mode} fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey} />
      <OutputColumn mode={mode} outputText={outputText} />
    </Box>
    </>
  )
}

export default App
