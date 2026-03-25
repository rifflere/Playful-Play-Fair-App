import './App.css'
import EncryptColumn from './components/EncryptColumn';
import ArrangeColumn from './components/ArrangeColumn';
import DecryptColumn from './components/DecryptColumn';
import { useState } from 'react';
import { AppBar, Toolbar, Box} from '@mui/material';

const alphabet = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function App() {
  const [cipherKey, setCipherKey] = useState<string[]>([]);
  const remaining = alphabet.filter(l => ! cipherKey.includes(l))
  const fullGrid = [...cipherKey, ...remaining]

  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ bgcolor:'RebeccaPurple' }}></Toolbar>
    </AppBar>

    <Box sx={{ bgcolor:'purple', display:'flex', flexDirection:'row' }}>
        <EncryptColumn />
        <ArrangeColumn fullGrid={fullGrid} setCipherKey={setCipherKey} />
        <DecryptColumn />
      </Box>
    </>
  )
}

export default App
