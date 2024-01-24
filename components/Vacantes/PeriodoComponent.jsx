import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';

//...........
import {Url} from '../Url/URL';

const PeriodoComponent = ({ id,status }) => {
  const [fechaRegistro, setFechaRegistro] = useState('');

  useEffect(() => {
    const fetchPeriodo = async () => { 
      try {
        const response = await axios.get(`${Url}Period/${id}`);
        const periodo = response.data.slice(-1)[0];
        setFechaRegistro(parseISO(periodo.registrationDate));
      } catch (error) {
        console.error('Error al obtener el periodo:', error);
      }
    };

    fetchPeriodo();
  }, [id]);

  return (<div>
            {fechaRegistro && <p>Esta Vacante se ha {status} el {fechaRegistro && format(fechaRegistro, 'dd/MM/yyyy HH:mm a')}</p>}
          

         </div>)
};

export default PeriodoComponent;