import { Paper } from '@mui/material';

interface LetterProps {
    char : string;
}

function Letter({ char } : LetterProps) {
    return (
        <Paper elevation={2} sx={{ width: '20%' }}>
            {char}
        </Paper>
    );
}

export default Letter;