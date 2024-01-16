import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Form, Col } from 'react-bootstrap';

const PhoneField = ({ value, onChange }) => {
  const handleOnChange = (phone) => {

    console.log('auiPhone',phone)
    
    onChange(phone);

   // Actualizar el valor en el componente padre
  };
 
  return (
   
      <PhoneInput

        country={'do'} // Cambia el país según sea necesario
        value={value}
        onChange={(phone)=>handleOnChange(phone)}
        inputStyle={{ height: '40px', maxWidth: '100%', width: '100%'}}
        masks={{ 'do': '(...) ...-....' }}
      />
     
  );
};

export default PhoneField;