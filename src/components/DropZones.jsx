import { useDrop } from 'react-dnd';
import DraggableComponent from './Draggables';

function DropZone({ onDrop, droppedItems, id, children }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white', minHeight: '200px', padding: '20px', border: '1px solid black' }}>
      {children}
      {droppedItems
        .filter(item => item.dropzoneID === id)
        .map((item, index) => (
          <DraggableComponent key={index} id={item.id}>
            {`Component ${item.id}`}
          </DraggableComponent>
        ))}
    </div>
  );
}

export default DropZone;
