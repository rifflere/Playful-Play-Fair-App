import { Container, Paper, Typography } from '@mui/material';
import Letter from './Letter';

interface ArrangeColumnProps {
  fullGrid: string[];
  setCipherKey: (key: string[]) => void;
}

function ArrangeColumn({ fullGrid, setCipherKey }: ArrangeColumnProps) {
    return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2}>
        <Typography variant="h2">Arrange</Typography>
        <Typography variant="body1">Arrange grid here</Typography>
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {fullGrid.map((char) => (
                <Letter key={char} char={char}/>
            ))}
        </Container>
        </Paper>
    </Container>
  );
}

export default ArrangeColumn;