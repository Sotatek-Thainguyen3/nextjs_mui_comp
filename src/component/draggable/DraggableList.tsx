import { Box, Typography } from '@mui/material';
import DraggableListItem from './DraggableListItem';

interface DraggableListProps {
  children?: JSX.Element;
  list: { title?: string }[];
  renderItemContent?: (data: any) => JSX.Element;
  onDrop?: (index: number) => void;
  onDragStart?: (index: number) => void;
}
const DraggableList = ({ list, children, onDrop, onDragStart, renderItemContent }: DraggableListProps) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {list.map((item, index) => (
        <DraggableListItem
          key={index}
          index={index}
          onDragStart={(index) => onDragStart?.(index)}
          onDrop={(index) => onDrop?.(index)}
        >
          {renderItemContent ? (
            renderItemContent?.(item)
          ) : (
            <Box
              sx={{
                padding: 1,
                backgroundColor: 'aliceblue',
                borderRadius: '9px',
                ...(index !== 0 && { marginTop: '8px' }),
              }}
            >
              <Typography>{item.title}</Typography>
            </Box>
          )}
        </DraggableListItem>
      ))}
    </ul>
  );
};

export default DraggableList;
