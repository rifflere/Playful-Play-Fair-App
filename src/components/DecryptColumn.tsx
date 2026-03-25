import { Container, Paper, TextField, Typography } from '@mui/material';

function DecryptColumn() {
  return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2}>
        <Typography variant="h2">Decrypt</Typography>
        <Typography variant="body1">Input ciphered text here / view encrypted text here</Typography>
        <TextField label="Enter your input" variant="outlined" />
        </Paper>
    </Container>
  );
}

export default DecryptColumn;