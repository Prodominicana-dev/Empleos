import  Axios  from 'axios';


import {Url} from '../Url/URL';




//Perfil.........................................................

export async function  PostPutAssessment(data){
    if(data?.id){
            
        await Axios.put(`${Url}ProfileAnswer/${data.id}`, data).then(res=>{

        console.log('Perfil actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar el Assessment', error);
        })

    }else{
        
        await Axios.post(`${Url}ProfileAnswer`,data).then(res=>{

        console.log('Perfil subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el Assessment', error);
        })
    }
}





//LanguageAssessment........................................................................
export async function DeleteLanguage(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}LanguageAnswer/${eliminar.id}`).then(res=>{

        console.log('Language eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar el Lenguage', error);
        })
        }
    })

}
export async function PostPutLanguage(Language){
    Language.map(async(Language)=>{


        if(Language.id != null){

        await Axios.put(`${Url}LanguageAnswer/${Language.id}`, Language).then(res=>{

        console.log('Language actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar el Lenguage', error);
        })

        }else{

        await Axios.post(`${Url}LanguageAnswer`, Language).then(res=>{

        console.log('Language subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el Lenguage', error);
        }) 
        
        }
    })

}


//KnowledgeAssessment.......................................................................
export async function DeleteKnowledge(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}KnowledgeAnswer/${eliminar.Id}`).then(res=>{

        console.log('Conocimientos de informática eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar Conocimientos de informática', error);
        })
        }
    })

}
export async function PostPutKnowledge(Knowledge){
  Knowledge.map(async(knowledge)=>{


        if(knowledge.id != null){

        await Axios.put(`${Url}KnowledgeAnswer/${knowledge.id}`, knowledge).then(res=>{

        console.log('Conocimientos de informática actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar Conocimientos de informática', error);
        })

        }else{

        await Axios.post(`${Url}KnowledgeAnswer`, knowledge).then(res=>{

        console.log('Conocimientos de informática subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir Conocimientos de informática', error);
        }) 
        
        }
    })

}


//ProfileParticulars.................................................................
export async function DeleteProfileParticulars(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}ProfileParticulars/${eliminar.id}`).then(res=>{

        console.log('Particular del perfil eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar Particular del perfil', error);
        })
        }
    })

}
export async function PostPutProfileParticulars(ProfileParticulars){
  ProfileParticulars.map(async(ProfileParticulars)=>{


        if(ProfileParticulars.id != null){

        await Axios.put(`${Url}ProfileParticularsAnswer/${ProfileParticulars.id}`, ProfileParticulars).then(res=>{

        console.log('Particular del perfil actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar Particular del perfil', error);
        })

        }else{

        await Axios.post(`${Url}ProfileParticularsAnswer`, ProfileParticulars).then(res=>{

        console.log('Particular del perfil subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir Particular del perfil', error);
        }) 
        
        }
    })

}
//Aplicante..............................................
export async function PostPutPositionAppliedFor(PositionAppliedFor){
 


        if(PositionAppliedFor.id != null){

        await Axios.put(`${Url}PositionAppliedFor/${PositionAppliedFor.id}`, ProfileParticulars).then(res=>{

        console.log('Aplicante actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar Aplicante', error);
        })

        }else{

        await Axios.post(`${Url}PositionAppliedFor`, PositionAppliedFor).then(res=>{

        console.log('Aplicante subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir Aplicante', error);
        }) 
        
        }
    

}