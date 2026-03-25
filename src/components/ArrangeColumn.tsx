import { Container, Paper, Typography } from '@mui/material';
import Letter from './Letter';

function ArrangeColumn() {
    const letters = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
    return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2}>
        <Typography variant="h2">Arrange</Typography>
        <Typography variant="body1">Arrange grid here</Typography>
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {letters.map((char) => (
                <Letter key={char} char={char}/>
            ))}
        </Container>
        </Paper>
    </Container>
  );
}

export default ArrangeColumn;