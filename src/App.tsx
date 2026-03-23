import './App.css'
import { AppBar, Toolbar, Box, Container, Paper, Typography } from '@mui/material';

function App() {


  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ bgcolor:'RebeccaPurple' }}></Toolbar>
    </AppBar>

      <Box sx={{ bgcolor:'purple', display:'flex', flexDirection:'row' }}>
        <Container sx={{ flex: 1 }}>
          <Paper elevation={2}>
            <Typography variant="h2">Encrypt</Typography>
            <Typography variant="body1">Input plain text here / view plaintext message</Typography>
          </Paper>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Paper elevation={2}>
            <Typography variant="h2">Arrange</Typography>
            <Typography variant="body1">Arrange grid here</Typography>
            <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Paper elevation={2} sx={{  width: '20%' }}>A</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>B</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>C</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>D</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>E</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>F</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>G</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>H</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>I</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>K</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>L</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>M</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>N</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>O</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>P</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>Q</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>R</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>S</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>T</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>U</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>V</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>W</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>X</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>Y</Paper>
              <Paper elevation={2} sx={{  width: '20%' }}>Z</Paper>
            </Container>
          </Paper>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Paper elevation={2}>
            <Typography variant="h2">Decrypt</Typography>
            <Typography variant="body1">Input ciphered text here / view encrypted text here</Typography>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default App
