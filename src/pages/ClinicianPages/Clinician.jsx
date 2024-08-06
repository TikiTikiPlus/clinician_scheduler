import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Modal from '../../components/Modal';

const Clinician = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [patients, setPatients] = useState([]);
  const [timeframe, setTimeframe] = useState([]);

  const handleDateClick = (info) => {
    if (!modalIsOpen) {
      setSelectedDate(info.dateStr);
      console.log(`Selected date: ${info.dateStr}`);
      // Fetch patients for the selected date
      const fetchedPatients = [
        { id: 1, name: 'John Doe', content: 'Testing', start: `${info.dateStr}T08:00:00`, end: `${info.dateStr}T10:00:00` },
        { id: 2, name: 'Jane Smith', content: 'Testing', start: `${info.dateStr}T11:00:00`, end: `${info.dateStr}T12:00:00` },
      ];

      // Add a patient with a fixed date if the selected date is August 10
      if (info.dateStr === '2024-08-10') {
        console.log('Adding fixed-date patient');
        fetchedPatients.push({ id: 3, name: 'Alice Johnson', content: 'Fixed Date', start: `2024-08-10T09:00:00`, end: `2024-08-10T10:00:00` });
      }

      setPatients(fetchedPatients);
      const patientsTimed = fetchedPatients.map((patient) => ({
        title: patient.name,
        start: patient.start,
        end: patient.end,
        content: patient.content,
      }));
      setTimeframe(patientsTimed);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
      <Modal
        show={modalIsOpen}
        onClose={closeModal}
        events={timeframe}
        selectedDate={selectedDate}
      >
        <p>Patients for {selectedDate}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Clinician;
