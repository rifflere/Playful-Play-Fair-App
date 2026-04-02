import { Container, Paper, Typography } from '@mui/material';
import Letter from './Letter';
import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';

interface ArrangeColumnProps {
    mode: 'encrypt' | 'decrypt';
    fullGrid: string[];
    setCipherKey: (key: string[]) => void;
    cipherKey: string[];
}

function ArrangeColumn({ mode, fullGrid, setCipherKey, cipherKey }: ArrangeColumnProps) {
    function handleDragEnd(event: DragEndEvent) {
        if (!event.over) return;

        const oldIndex = fullGrid.indexOf(event.active.id as string);
        const newIndex = fullGrid.indexOf(event.over.id as string);
        if (newIndex > cipherKey.length) return;
        const newGrid = arrayMove(fullGrid, oldIndex, newIndex);

        setCipherKey(newGrid.slice(0, newIndex + 1));
    }

    return (
    <>
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={fullGrid} strategy={rectSortingStrategy}>
            <Container sx={{ flex: 1 }}>
                <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="h2">Arrange</Typography>
                <Typography variant="body1">MODE: *{mode}*</Typography>
                <Typography variant="body1">Arrange grid here</Typography>
                <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {fullGrid.map((char) => (
                        <Letter key={char} char={char} isKey={cipherKey.includes(char)}/>
                    ))}
                </Container>
                <Typography variant="body1">Key word: {cipherKey}</Typography>
                </Paper>
                { mode === "encrypt" && 
                <Paper elevation={2} sx={{ marginTop: 2, p: 2 }}>
                    <Typography variant="subtitle1">Tip: One of the longest words in the English language with no repeating letters: "uncopyrightable"</Typography>
                </Paper> }
            </Container>
        </SortableContext>
    </DndContext>
    </>
  );
}

export default ArrangeColumn;