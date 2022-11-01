import { DragEvent, EventHandler, useRef } from 'react';

interface DraggableListItemProps {
  children?: JSX.Element | string;
  index: number;
  draggable?: boolean;
  onDrop?: (index: number) => void;
  onDragStart?: (index: number) => void;
}

const DraggableListItem = ({
  children,
  index,
  draggable = true,
  onDrop,
  onDragStart,
}: DraggableListItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const onDragStartAction = (e: DragEvent<HTMLLIElement>, idx?: number) => {
    const target = e.target as HTMLLIElement;
    //Remove default drag ghost
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(target, 50000, 50000);

    //Custom drag ghost
    let ghostNode = (e.target as HTMLLIElement).cloneNode(true) as HTMLElement;
    ghostNode.style.position = 'absolute';

    //show ghost add mouse pointer position
    ghostNode.style.top = e.pageY - target.offsetHeight / 2 + 'px';
    ghostNode.style.left = e.pageX - target.offsetWidth / 2 + 'px';

    //add width/height to ghost node
    ghostNode.style.height = target.offsetHeight + 'px';
    ghostNode.style.width = target.offsetWidth + 'px';

    // Add some style
    ghostNode.style.opacity = '0.8';
    ghostNode.style.pointerEvents = 'none';

    // Add id
    ghostNode.id = 'ghostNode';

    document.body.prepend(ghostNode);

    // identify selected item
    itemRef.current?.classList.add('dragstart');

    if (onDragStart) {
      onDragStart(index);
    }
  };

  // Event when dragging
  const onDrag = (e: DragEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    // move ghost node with mouse
    let ghostNode = document.querySelector('#ghostNode') as HTMLElement;
    ghostNode.style.top = e.pageY - target.offsetHeight / 2 + 'px';
    ghostNode.style.left = e.pageX - target.offsetWidth / 2 + 'px';
  };

  // event when drag end
  const onDragEnd = () => {
    // remove ghost node
    document.querySelector('#ghostNode')?.remove();
    // remove selected item style
    itemRef.current?.classList.remove('dragstart');
  };

  // event when drag over item
  const onDragEnter = () => itemRef.current?.classList.add('dragover');

  // event when drag leave item
  const onDragLeave = () => itemRef.current?.classList.remove('dragover');

  // add event for item can drop
  const onDragOver = (e: DragEvent<HTMLLIElement>) => e.preventDefault();

  // event when drop
  const onDropAction = () => {
    itemRef.current?.classList.remove('dragover');
    onDrop?.(index);
  };

  return (
    <li
      ref={itemRef}
      style={{ listStyleType: 'none', padding: 0 }}
      draggable={draggable}
      onDragStart={(e) => onDragStartAction(e, index)}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDropAction}
    >
      {children}
    </li>
  );
};

export default DraggableListItem;
