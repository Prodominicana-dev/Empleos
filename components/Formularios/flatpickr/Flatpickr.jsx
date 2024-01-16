import React, { useEffect, useRef, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const FlatpickrDatePicker = ({ selectedDate, onDateChange, feedbackMessage }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const datePicker = flatpickr(inputRef.current, {
      dateFormat: 'd/m/Y',
      defaultDate: selectedDate, // Establecer la fecha inicial seleccionada
      onChange: (selectedDates, dateStr) => {
        onDateChange(dateStr);
      },
    });

    return () => {
      datePicker.destroy();
    };
  }, [onDateChange, selectedDate]);

  // const toggleCalendar = () => {
  //   setCalendarOpen((prev) => !prev);
  // };

  return (
    <div className={`form-group ${selectedDate ? 'has-error' : ''}`}>
      <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Selecciona una fecha"
        readOnly
        className={`form-control ${selectedDate ? 'is-valid' : 'is-invalid'}`}
        style={{ height: '38px', cursor: 'pointer' }}
      />
        {!selectedDate &&  (
        <div className="invalid-feedback">
          {feedbackMessage}
        </div>
      )}
    </div>

    </div>
  );
};

export default FlatpickrDatePicker;
