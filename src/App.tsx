import './App.css'
import Column from './components/Column';
import { useState } from 'react';
import { AppBar, Toolbar, Box, ToggleButton, ToggleButtonGroup} from '@mui/material';

const alphabet = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function App() {
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>("encrypt");
  const [inputText, setInputText] = useState<string>("");
  const [cipherKey, setCipherKey] = useState<string[]>([]);
  const [outputText, setOutputText] = useState<string>("");
  const remaining = alphabet.filter(l => ! cipherKey.includes(l));
  const fullGrid = [...cipherKey, ...remaining];

  const outputMode = mode === "encrypt" ? "decrypt" : "encrypt";

  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ bgcolor:'RebeccaPurple' }}></Toolbar>
      <ToggleButtonGroup sx={{ bgcolor:'purple'}} exclusive>
        <ToggleButton value="encrypt" onClick={() => setMode("encrypt")} selected={mode === "encrypt"}>Encrypt</ToggleButton>
        <ToggleButton value="decrypt" onClick={() => setMode("decrypt")} selected={mode === "decrypt"}>Decrypt</ToggleButton>
      </ToggleButtonGroup>
    </AppBar>

    <Box sx={{ bgcolor:'purple', display:'flex', flexDirection:'row' }}>
      <Column role="input" mode={mode} text={inputText} setText={setInputText} fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey}/>
      <Column role="arrange" mode={mode} text={inputText} setText={setOutputText} fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey} />
      <Column role="output" mode={outputMode} text={outputText} setText={setOutputText} fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey} />

      {/* <EncryptColumn encryptText={encryptText} setEncryptText={setEncryptText} />
      <ArrangeColumn fullGrid={fullGrid} setCipherKey={setCipherKey} cipherKey={cipherKey} />
      <DecryptColumn decryptText={decryptText} setDecryptText={setDecryptText} /> */}
    </Box>
    </>
  )
}

export default App
