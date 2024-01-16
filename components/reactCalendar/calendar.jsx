import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parse, isValid, format } from 'date-fns';

const MyCalendar = ({ selectedDate, onDateChange, feedbackMessage }) => {
  const [calendarVisible, setCalendarVisible] = useState(false);

  const handleDateChange = (date) => {
    if (isValid(date)) {
      onDateChange(date);
      setCalendarVisible(false); // Oculta el calendario después de seleccionar una fecha
    }
  };

  const parsedDate = isValid(parse(selectedDate, 'dd/MM/yyyy', new Date()))
    ? parse(selectedDate, 'dd/MM/yyyy', new Date())
    : null;

  return (
    <div className={`form-group ${selectedDate === undefined ? 'has-error' : ''}`}>
      <input
        type="text"
        placeholder="Selecciona una fecha"
        readOnly
        className={`form-control ${selectedDate !== undefined ? 'is-valid' : 'is-invalid'}`}
        style={{ height: '40px' }}
        value={parsedDate ? format(parsedDate, 'dd/MM/yyyy') : ''}
        onClick={() => setCalendarVisible(true)} // Muestra el calendario al hacer clic en el input
      />
      {calendarVisible && (
        <Calendar
          onChange={handleDateChange}
          value={parsedDate}
        />
      )}
      {selectedDate === undefined && (
        <div className="invalid-feedback">
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
