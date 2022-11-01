import { Box, Typography } from '@mui/material';
import { DragEvent, useState } from 'react';
import DraggableList from 'src/component/draggable/DraggableList';

const Test = () => {
  const [list, setList] = useState([
    { title: 'name1' },
    { title: 'name2' },
    { title: 'name3' },
    { title: 'name4' },
    { title: 'name5' },
  ]);
  // const [draggedItem, setDraggedItem] = useState<string>();
  // const [draggedIdx, setDraggedIdx] = useState(null);

  // const onDragStart = (e: DragEvent<HTMLElement>, index: number) => {
  //   setDraggedItem(list[index]);
  //   e.dataTransfer.effectAllowed = 'move';
  //   e.dataTransfer.setData('text/html', (e.target as HTMLElement).parentNode as string);
  //   e.dataTransfer.setDragImage((e.target as HTMLElement).parentNode as Element, 0, 0);
  // };

  // const onDragOver = (index: number) => {
  //   const draggedOverItem = list[index];

  //   // if the item is dragged over itself, ignore
  //   if (draggedItem === draggedOverItem) {
  //     return;
  //   }

  //   // filter out the currently dragged item
  //   let items = list.filter((item: string) => item !== draggedItem);

  //   // add the dragged item after the dragged over item
  //   items.splice(index, 0, draggedItem || '');

  //   setlist(items);
  // };

  // const onDragEnd = () => {
  //   setDraggedIdx(null);
  // };

  const [dragStartIndex, setdragStartIndex] = useState<number>(0);

  // get index of draged item
  const onDragStart = (index: number) => setdragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex: number) => {
    // get draged item
    const dragItem = list[dragStartIndex];

    // delete draged item in list
    let newList = [...list];
    newList.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setList([
        ...newList.slice(0, dropIndex - 1),
        dragItem,
        ...newList.slice(dropIndex - 1, newList.length),
      ]);
    } else {
      setList([
        ...newList.slice(0, dropIndex),
        dragItem,
        ...newList.slice(dropIndex, newList.length),
      ]);
    }
  };

  return (
    <Box
      sx={{
        marginTop: '5rem',
        width: '25vw',
      }}
    >
      <Typography>List Drag Drop</Typography>
      <DraggableList list={list} onDrop={onDrop} onDragStart={onDragStart} />
      {/* {list.map((item, index) => {
        return (
          <Box key={item} onDragOver={() => onDragOver(index)}>
            <Box draggable onDragStart={(e) => onDragStart(e, index)} onDragEnd={onDragEnd}>
              <Typography>{item}</Typography>
            </Box>
          </Box>
        );
      })} */}
    </Box>
  );
};

export default Test;
