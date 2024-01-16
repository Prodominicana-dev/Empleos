import { useState } from 'react';

const useKnowledgeValidation = () => {
  const [errorKnowledge, setErrorKnowledge] = useState([]);

  const validateKnowledge = (arr) => {
    const newError = arr.map(item => {
      const itemErrors = {};

      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }

      return itemErrors;
    });

    setErrorKnowledge(newError);
  };

  return { errorKnowledge, validateKnowledge };
};

export default useKnowledgeValidation;