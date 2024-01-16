
//import React, { useEffect, useRef, useState } from 'react';
import  Axios  from 'axios';
import {Url} from '../../Url/URL';

// const updatedTarget = target.filter((targetItem) => targetItem.Id !== item.Id);
// setTarget(updatedTarget);
export async function EliminarPuestoSolicitado(Id,target02) {
    try {
      const resp = await Axios.get(`${Url}PuestoSolicitado/${Id}`);
       const Data= resp.data;
       console.log('aquiiiiii',Data)
      if (Data !== undefined) {

        let puestosSolicitados = [];

       await target02.forEach(async(Idvacante) => {
                    
                  puestosSolicitados =  Data.filter((Idv) => Idv.idjobOpening === Idvacante.id);

              
                const puestoIds = puestosSolicitados.map((puesto) => puesto.id);
          
                await Promise.all(

                  puestoIds.map(async (puestoId) => {

                    await Axios.delete(`${Url}PuestoSolicitado/${puestoId}`);
                    console.log(`Puesto Solicitado ${puestoId} borrado`);

                  })

                );
      })
      }
    } catch (error) {

      console.error('Error al obtener los puestos solicitados:', error);

    }
  }

export async function PuestoSolicitado01(id){
  
    
    let IdPuesto = [];
    let DatosVacante = [];
    
    try {

      const resp = await Axios.get(`${Url}PuestoSolicitado/${id}`);
       resp.data;
    
      if (resp.data !== undefined) {

        resp.data.forEach((puesto) => {

            if(puesto.status == "None"){

                  IdPuesto = [...IdPuesto, resp.data];

            }

        });
console.log('Aquiiiiii',IdPuesto)
        if (IdPuesto[0].length > 0) {

          await Promise.all(
            
            IdPuesto[0].map(async (vacante) => {
              try {
                const respo = await Axios.get(`${Url}JobOpening/${vacante.idJobOpening}`);
                  const Datos= respo.data;
                DatosVacante = [...DatosVacante, Datos];

              } catch (error) {
                console.error('Error al obtener consulta:', error);
              }
            })

          );

        }

      }

    } catch (error) {
      console.error('Error al obtener la lista de puestos solicitados:', error);
    }
    
    return DatosVacante;
    
}