
//import React, { useEffect, useRef, useState } from 'react';
import  Axios  from 'axios';
import {Url} from '../../Url/URL';

// const updatedTarget = target.filter((targetItem) => targetItem.Id !== item.Id);
// setTarget(updatedTarget);
export async function EliminarPuestoSolicitado(Id,target02) {
    try {
      const resp = await Axios.get(`${Url}PuestoSolicitado/${Id}`);
  
      if (resp.data !== undefined) {

        let puestosSolicitados = [];

       await target02.forEach(async(Idvacante) => {
                    
                  puestosSolicitados =  resp.data.filter((Idv) => Idv.IdVacante === Idvacante.Id);

              
                const puestoIds = puestosSolicitados.map((puesto) => puesto.Id);
          
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

export async function PuestoSolicitado01(Id){

    
    let IdPuesto = [];
    let DatosVacante = [];
    
    try {

      const resp = await Axios.get(`${Url}PuestoSolicitado/${Id}`);

    
      if (resp.data !== undefined) {

        resp.data.forEach((puesto) => {

            if(puesto.Estado == "None"){

                  IdPuesto = [...IdPuesto, resp.data];

            }

        });

        if (IdPuesto[0].length > 0) {

          await Promise.all(

            IdPuesto[0].map(async (vacante) => {
              try {
                const respo = await Axios.get(`${Url}Vacantes01/${vacante.IdVacante}`);
                  
                DatosVacante = [...DatosVacante, respo.data];

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