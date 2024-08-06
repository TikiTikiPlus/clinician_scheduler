import { useDrag } from 'react-dnd';

const DraggableComponent = ({ id, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '8px', margin: '4px', border: '1px solid black' }}>
      {children}
    </div>
  );
};

export default DraggableComponent;
