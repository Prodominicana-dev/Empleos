




export const validateLanguage = (arr, setErrorLanguage) => {
    const newError = arr.map(item => {
      const itemErrors = {};
  
      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }
  
      return itemErrors;
    });
  
    setErrorLanguage(newError);
  };
  
  export const validateKnowledge = (arr,{setErrorKnowledge}) => {
    const newError = [];
    
    arr.forEach((item, index) => {
      const itemErrors = {}; 
  
      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }
  
      newError[index] = itemErrors; 
    });
  
    setErrorKnowledge(newError); 
  };
  
  export const validateprofileParticulars = (arr,{setErrorprofileParticulars}) => {
    const newError = [];
    
    arr.forEach((item, index) => {
      const itemErrors = {}; 
  
      for (const key in item) {
        if (!item[key]) {
          itemErrors[key] = 'Por favor, selecciona una opción.';
        }
      }
  
      newError[index] = itemErrors; 
    });
  
    setErrorprofileParticulars(newError); 
  };
  //................................................