import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableComponent from "../../components/Draggables.jsx";
import DropZone from "../../components/DropZones.jsx";
import "./Nonclinician.css"

const NonClinician = () => {
  const [referrals, setReferrals] = useState([]);

  const handleDrop = (itemID, dropzoneID) => {
    setReferrals((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== itemID);
      return [...updatedItems, { id: itemID, dropzoneID }];
    });
    console.log(`Dropped item with id: ${itemID} into dropzone with id: ${dropzoneID}`);
    // Save to database logic here
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="Non_Clinician_Page">
        <div className="container">
          <p>Main dropzone</p>
          <DropZone onDrop={handleDrop} droppedItems={referrals} id="Nested_1">
            <p>Nested 1</p>
          </DropZone>
          <DropZone onDrop={handleDrop} droppedItems={referrals} id="Nested_2">
            <p>Nested 2</p>
          </DropZone>
        </div>
        <div className="draggables">
          <DraggableComponent id="1">Component 1</DraggableComponent>
          <DraggableComponent id="2">Component 2</DraggableComponent>
        </div>
      </div>
    </DndProvider>
  );
};

export default NonClinician;
