import axios from "axios";
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { PuestoSolicitado01 } from "./puestosolicitado";
//...
import { Url } from '../../Url/URL';

const VacantesForm = ({ target, setTarget, setTarget02, setTargetPlus, targetPlus, id }) => {
  const [source, setSource] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function obtenerVacante() {
      try {
        axios.get(`${Url}JobOpening`).then((response) => {
          setSource(response.data);
        });
      } catch (error) {
        console.error('Error al obtener los datos de la vacantes:', error);
      }
    }
    obtenerVacante();
  }, []);

  useEffect(() => {
    async function obtenerDatosVacante() {
      try {
        const puesto = await PuestoSolicitado01(id);
        setTarget(puesto);
      } catch (error) {
        console.error('Error al obtener los datos de la vacante:', error);
      }
    }

    obtenerDatosVacante();
  }, []);

  const sourceWithoutTarget = source.filter((sourceItem) => {
    const foundInTarget = target.some((targetItem) => targetItem.id === sourceItem.id);
    return !foundInTarget && sourceItem.status !== 'deshabilitado';
  });

  const onChange = (event) => {
    setSource(event.source);
    setTarget(event.target);
    setTargetPlus(plus => [...plus, event.target[event.target.length - 1]]);
    setSelectedItem(null);
  };

  const sourceItemTemplate = (item) => {
    if (item.status !== 'deshabilitado' && item.id !== target.id) {
      return (
        <div
          className={`flex flex-wrap p-2 align-items-center gap-3 mr-5 ${selectedItem === item ? 'selected' : ''}`}
          onClick={() => setSelectedItem(item)}
        >
          <div className="flex-1 flex flex-column gap-2">
            <span className="font-bold">{item.name}</span>
            <div className="flex align-items-center gap-2">
              <span>{item.profile}</span>
            </div>
          </div>
          <div className="font-bold text-900">{item.status}</div>
        </div>
      );
    }
  };

  const targetItemTemplate = (item) => {
    const handleRemove = (event) => {
      event.stopPropagation();
      const updatedTarget = target.filter((targetItem) => targetItem.id !== item.id);
      setTarget(updatedTarget);
      setTarget02(targ => [...targ, { id: item.id }]);

      if (!source.some(sourceItem => sourceItem.id === item.id)) {
        setSource([...source, item]);
      }
    
      setTargetPlus(plus => plus.filter(plusItem => plusItem.id !== item.id));
      //console.log(sourceWithoutTarget)
    };

    return (
      <div className="flex flex-wrap p-2 align-items-center gap-3 ml-5">
        <div className="flex-1 flex flex-column gap-2">
          <div className="row bm-3">
            <span className="font-bold text-900 col-lg-10">{item.name}</span>
            <button onClick={handleRemove} className="btn btn-danger col-lg-2 font-bold">
              Eliminar
            </button>
            <div className="row"></div>
            <div className="flex align-items-center gap-2">
              <span>{item.profile}</span>
            </div>
          </div>
          
          {/* <div className="font-bold text-900">{item.Condicion}</div> */}
        </div>
      </div>
    );
  };

  const moveSelectedItemToTarget = () => {
    if (selectedItem) {
      const updatedTarget = [...target, selectedItem];
      setTarget(updatedTarget);
      setSource(sourceWithoutTarget.filter(item => item !== selectedItem));
      setTargetPlus(plus => [...plus, selectedItem]);
      setSelectedItem(null);
    
    }
  };

  return (
    <div className="mb-8 mt-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>
        {`
          .my-picklist .p-picklist-buttons {
            display: none;
          }
          .flex-wrap.selected {
            background-color: #E4E4E4;
          }
          .picklist-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto; 
            padding: 1rem; 
          }
          .target-container {
            margin-right: 1rem; /* Agrega margen en la parte derecha */
          }
         
            .custom-button {
              background-color: #007bff;
              border-color: #007bff;
              color: #fff;
              position: relative;
              height: 9.7vw;
              width: 3rem;
              right: 48.3%; /* Ajusta esta propiedad para posicionar el botón */
              top: 20px; /* Ajusta esta propiedad para posicionar el botón */
              display: flex;
          
              align-items: center;
              justify-content: center;
            }
            @media (max-width: 1400px) {
              .custom-button {
                background-color: #007bff;
                border-color: #007bff;
                color: #fff;
                position: relative;
                height: 4.9em;
                width: 2vw;
                right: 31rem; /* Ajusta esta propiedad para posicionar el botón */
                top: 0px; /* Ajusta esta propiedad para posicionar el botón */
                 display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            }
         
        `}
      </style>

      <PickList
        className="my-picklist"
        showSourceControls={false}
        showTargetControls={false}
        source={sourceWithoutTarget}
        target={target}
        onChange={onChange}
        sourceHeader="Vacantes disponibles"
        targetHeader="Vacante seleccionada"
        sourceItemTemplate={sourceItemTemplate}
        targetItemTemplate={targetItemTemplate}
        filter
        filterBy="NombreVacante"
        breakpoint="1400px"
        sourceStyle={{ height: '30rem',width:'60em' }}
        targetStyle={{ height: '30rem',width:'60em' }}
        disabled={false}
        sourceFilterPlaceholder="Search by name"
        targetFilterPlaceholder="Search by name"
      />

     <button
        className={`p-button p-button-secondary p-button-vertical  custom-button`}
        onClick={moveSelectedItemToTarget}
        disabled={!selectedItem}
        // style={{
        //   position: 'relative',
        //   //display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   height: '9.7vw',
        //   right: '64.2rem', 
        //   top: '0px',
        //   width:'52px',
          

          
        // }}
      >
        <span className="p-button-icon pi pi-chevron-right" />
      </button> 
    </div>
  );
}

export default VacantesForm;
