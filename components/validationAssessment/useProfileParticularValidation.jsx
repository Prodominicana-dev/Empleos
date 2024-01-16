import { useState } from 'react';

const useProfileParticularValidation = () => {
  const [errorProfileParticular, setErrorProfileParticular] = useState([]);

  const validateProfileParticular = (arr) => {
    const newError = arr.map(item => {
      const itemErrors = {};

      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }

      return itemErrors;
    });

    setErrorProfileParticular(newError);
  };

  return { errorProfileParticular, validateProfileParticular };
};

export default useProfileParticularValidation;