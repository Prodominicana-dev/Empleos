import { useState } from 'react';

const useValidation = () => {
  const [error, setError] = useState(null);

  const validate = (arr) => {
    console.log('hhhh',arr)
    const newError = arr.map(item => {
      const itemErrors = {};

      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }

      return itemErrors;

    });
        
    setError(newError);
  };
  
  return { error, validate };
};

export default useValidation;
