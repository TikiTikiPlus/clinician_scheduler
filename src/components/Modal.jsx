import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import './Modal.css';

const Modal = ({ show, onClose, events, selectedDate }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  if (!show) {
    return null;
  }

  const handleEventClick = (info) => {
    const patient = events.find(event => event.title === info.event.title);
    setSelectedPatient(patient);
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Patients for {selectedDate}</h2>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridDay"
          events={events}
          headerToolbar={false}
          allDaySlot={false}
          eventClick={handleEventClick}
        />
        {selectedPatient && (
          <div className="patient-content">
            <h3>{selectedPatient.title}</h3>
            <p>{selectedPatient.content}</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
