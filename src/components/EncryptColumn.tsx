import { Container, Paper, TextField, Typography } from '@mui/material';

function EncryptColumn() {
  return (
    <Container sx={{ flex: 1 }}>
      <Paper elevation={2}>
        <Typography variant="h2">Encrypt</Typography>
        <Typography variant="body1">Input plain text here / view plaintext message</Typography>
        <TextField label="Enter your input" variant="outlined" />
      </Paper>
    </Container>
  );
}

export default EncryptColumn;