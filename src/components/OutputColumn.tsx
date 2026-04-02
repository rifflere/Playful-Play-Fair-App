import { Container, Paper, Typography } from '@mui/material';

interface OutputColumnProps {
  mode: 'encrypt' | 'decrypt';
  outputText: string;

}

function OutputColumn({ mode, outputText }: OutputColumnProps) {
  return (
    <Container sx={{ flex: 1 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h5" component="h2">Output</Typography>
        <Typography variant="body1">MODE: *{mode}*</Typography>
        <Typography variant="body1">Output:</Typography>
        <Typography variant="body2">{outputText}</Typography>
        </Paper>
    </Container>
  );
}

export default OutputColumn;