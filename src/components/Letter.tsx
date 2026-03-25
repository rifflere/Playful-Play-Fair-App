import { Paper } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface LetterProps {
    char : string;
}

function Letter({ char } : LetterProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: char});
    return (
        <Paper 
            ref={setNodeRef} 
            {...attributes} 
            {...listeners} 
            sx={{ width: '20%',
                transform: CSS.Transform.toString(transform),
                transition,
         }}>
            {char}
        </Paper>
    );
}

export default Letter;