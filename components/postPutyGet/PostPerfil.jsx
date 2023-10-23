import  Axios  from 'axios';


import {Url} from '../Url/URL';


export async function PostPuestoSolicitado(pustosSoli){

    await Axios.post(`${Url}PuestoSolicitado`, pustosSoli).then(res=>{

        console.log('Puesto solisitado subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el puesto', error);
    });

}

//Perfil.........................................................

export async function  PutPerfil(Suscripcion){
    if(Suscripcion?.Id){
            
        await Axios.put(`${Url}InformePerfil/${Suscripcion.Id}`, Suscripcion).then(res=>{

        console.log('Perfil actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar el perfil', error);
        })

    }else{
        
        await Axios.post(`${Url}InformePerfil`,Suscripcion).then(res=>{

        console.log('Perfil subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el perfil', error);
        })
    }
}
//ExperienciaLaboral...................................................................................
export async function DeleteExperienciaLaboral(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}ExperienciaLaboralExterna/${eliminar.Id}`).then(res=>{

        console.log('Experiencia eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Experiencia', error);
        })

        
        
        }
    })

}

export async function PutExperienciaLaboral(formularios){


 

    formularios.map(async(experiencia)=>{


        if(experiencia.Id != null){

        await Axios.put(`${Url}ExperienciaLaboralExterna/${experiencia.Id}`, experiencia).then(res=>{

        console.log('Experiencia actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Experiencia', error);
        })

        }else{

        await Axios.post(`${Url}ExperienciaLaboralExterna`, experiencia).then(res=>{

        console.log('Experiencia subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Experiencia', error);
        }) 
        
        }
    })
  
}
export async function GetExperienciaLaboral(Id){

    let Experiencia = null;
  
    
    try {
      const resp = await Axios.get(`${Url}ExperienciaLaboralExterna/${Id}`);

    
      if (resp.data !== undefined) {

        Experiencia = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de puestos solicitados:', error);
    }
    
    return Experiencia;
  
}

//Educacion....................................................
export async function DeleteEducacion(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}Educacion/${eliminar.Id}`).then(res=>{

        console.log('Educacion eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Educacion', error);
        })
        }
    })

}
export async function PutEducacion(educacion){
    educacion.map(async(educaciones)=>{


        if(educaciones.Id != null){

        await Axios.put(`${Url}Educacion/${educaciones.Id}`, educaciones).then(res=>{

        console.log('Educacion actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Educacion', error);
        })

        }else{

        await Axios.post(`${Url}Educacion`, educaciones).then(res=>{

        console.log('Educacion subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Educacion', error);
        }) 
        
        }
    })

}
export async function GetEducacion(Id){

    let Experiencia = null;
  
    
    try {
      const resp = await Axios.get(`${Url}Educacion/${Id}`);

    
      if (resp.data !== undefined) {

        Experiencia = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Educacion:', error);
    }
    
    return Experiencia;
  
}
//Formacion.............................................................................
export async function DeleteFormacion(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}DiplCurSeminSert/${eliminar.Id}`).then(res=>{

        console.log('Formacion eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Formacion', error);
        })
        }
    })

}
export async function PutFormacion(Formacion){
    Formacion.map(async(formacion)=>{


        if(formacion.Id != null){

        await Axios.put(`${Url}DiplCurSeminSert/${formacion.Id}`, formacion).then(res=>{

        console.log('Formacion actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la formacion', error);
        })

        }else{

        await Axios.post(`${Url}DiplCurSeminSert`, formacion).then(res=>{

        console.log('Formacion subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Formacion', error);
        }) 
        
        }
    })

}
export async function GetFormacion(Id){

    let Formacion = null;
  
    
    try {
      const resp = await Axios.get(`${Url}DiplCurSeminSert/${Id}`);

    
      if (resp.data !== undefined) {

        Formacion = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Formacion:', error);
    }
    
    return Formacion;
  
}

//Idioma........................................................................
export async function DeleteIdioma(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}Idioma/${eliminar.Id}`).then(res=>{

        console.log('Idioma eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Idioma', error);
        })
        }
    })

}
export async function PutIdioma(Idioma){
    Idioma.map(async(idioma)=>{


        if(idioma.Id != null){

        await Axios.put(`${Url}Idioma/${idioma.Id}`, idioma).then(res=>{

        console.log('Idioma actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Idioma', error);
        })

        }else{

        await Axios.post(`${Url}Idioma`, idioma).then(res=>{

        console.log('Idioma subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Idioma', error);
        }) 
        
        }
    })

}
export async function GetIdioma(Id){

    let Idioma = null;
  
    
    try {
      const resp = await Axios.get(`${Url}Idioma/${Id}`);

    
      if (resp.data !== undefined) {

        Idioma = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Idioma:', error);
    }
    
    return Idioma;
  
}

//ReferenciasPersonales.......................................................................
export async function DeleteReferenciasPersonales(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}ReferenciasPersonales/${eliminar.Id}`).then(res=>{

        console.log('Referencias Personales eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar las Referencias Personales', error);
        })
        }
    })

}
export async function PutReferenciasPersonales(ReferenciasPersonales){
    ReferenciasPersonales.map(async(referenciasPersonales)=>{


        if(referenciasPersonales.Id != null){

        await Axios.put(`${Url}ReferenciasPersonales/${referenciasPersonales.Id}`, referenciasPersonales).then(res=>{

        console.log('Referencias Personales actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar las Referencias Personales', error);
        })

        }else{

        await Axios.post(`${Url}ReferenciasPersonales`, referenciasPersonales).then(res=>{

        console.log('Referencias Personales subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir las Referencias Personales', error);
        }) 
        
        }
    })

}
export async function GetReferenciasPersonales(Id){

    let ReferenciasPersonales = null;
  
    
    try {
      const resp = await Axios.get(`${Url}ReferenciasPersonales/${Id}`);

    
      if (resp.data !== undefined) {

        ReferenciasPersonales = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Referencias Personales:', error);
    }
    
    return ReferenciasPersonales;
  
}

//ReferenciasLaborales.................................................................
export async function DeleteReferenciasLaborales(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}ReferenciasLaborales/${eliminar.Id}`).then(res=>{

        console.log('Referencias Laborales eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar las Referencias Laborales', error);
        })
        }
    })

}
export async function PutReferenciasLaborales(ReferenciasLaborales){
    ReferenciasLaborales.map(async(referenciasLaborales)=>{


        if(referenciasLaborales.Id != null){

        await Axios.put(`${Url}ReferenciasLaborales/${referenciasLaborales.Id}`, referenciasLaborales).then(res=>{

        console.log('Referencias Laborales actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar las Referencias Laborales', error);
        })

        }else{

        await Axios.post(`${Url}ReferenciasLaborales`, referenciasLaborales).then(res=>{

        console.log('Referencias Laborales subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir las Referencias Laborales', error);
        }) 
        
        }
    })

}
export async function GetReferenciasLaborales(Id){

    let ReferenciasLaborales = null;
  
    
    try {
      const resp = await Axios.get(`${Url}ReferenciasLaborales/${Id}`);

    
      if (resp.data !== undefined) {

        ReferenciasLaborales = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Referencias Laborales:', error);
    }
    
    return ReferenciasLaborales;
  
}

//.........................................................................
// export async function PutPuestoSolicitado(Id,pustosSoli){
// await Axios.put(`http://localhost:3001/PuestoSolicitado/${Id}`, pustosSoli).then(res=>{

//     console.log('Puesto solisitado actualizado exitosamente');
//     }).catch (error=>{
//     console.error('Error al actualizar el puesto', error);
// })
// }