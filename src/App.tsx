import './App.css'
import EncryptColumn from './components/EncryptColumn';
import ArrangeColumn from './components/ArrangeColumn';
import DecryptColumn from './components/DecryptColumn';
import { AppBar, Toolbar, Box} from '@mui/material';

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ bgcolor:'RebeccaPurple' }}></Toolbar>
    </AppBar>

      <Box sx={{ bgcolor:'purple', display:'flex', flexDirection:'row' }}>
        <EncryptColumn />
        <ArrangeColumn />
        <DecryptColumn />
      </Box>
    </>
  )
}

export default App
