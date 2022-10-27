import { Box, Typography } from '@mui/material';
import { DragEvent, useState } from 'react';

const Test = () => {
  const [list, setlist] = useState(['🍰 Cake', '🍩 Donut', '🍎 Apple', '🍕 Pizza']);
  const [draggedItem, setDraggedItem] = useState<string>();
  const [draggedIdx, setDraggedIdx] = useState(null);

  const onDragStart = (e: DragEvent<HTMLElement>, index: number) => {
    setDraggedItem(list[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', (e.target as HTMLElement).parentNode as string);
    e.dataTransfer.setDragImage((e.target as HTMLElement).parentNode as Element, 0, 0);
  };

  const onDragOver = (index: number) => {
    const draggedOverItem = list[index];

    // if the item is dragged over itself, ignore
    if (draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = list.filter((item: string) => item !== draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, draggedItem || '');

    setlist(items);
  };

  const onDragEnd = () => {
    setDraggedIdx(null);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '5rem',
      }}
    >
      <Typography>List Drag Drop</Typography>
      {list.map((item, index) => {
        return (
          <Box key={item} onDragOver={() => onDragOver(index)}>
            <Box draggable onDragStart={(e) => onDragStart(e, index)} onDragEnd={onDragEnd}>
              <Typography>{item}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Test;
