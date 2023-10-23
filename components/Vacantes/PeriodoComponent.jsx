import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';

//...........
import {Url} from '../Url/URL';

const PeriodoComponent = ({ Id,Condicion }) => {
  const [fechaRegistro, setFechaRegistro] = useState('');

  useEffect(() => {
    const fetchPeriodo = async () => {
      try {
        const response = await axios.get(`${Url}Periodo/${Id}`);
        const periodo = response.data.slice(-1)[0];
        setFechaRegistro(parseISO(periodo.FechaRegistro));
      } catch (error) {
        console.error('Error al obtener el periodo:', error);
      }
    };

    fetchPeriodo();
  }, [Id]);

  return (<div>
            {fechaRegistro && <div>Esta Vacante se ha {Condicion} el {fechaRegistro && format(fechaRegistro, 'dd/MM/yyyy HH:mm a')}</div>}
          

         </div>)
};

export default PeriodoComponent;