import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';
import { useRouter } from 'next/router';

const DialogAplicando = ({dialogAplico,setDialogAplico,id}) => {

    const router = useRouter();
     const HideDialog = () => {
 
        setDialogAplico(false);
        router.push('/');
     }

   
     

    const DialogFooter = () => {

        return(
            <div>
                <div className="d-flex justify-content-end ">
                    
                       <Button className="mt-5 " label="ACEPTAR" rounded text raised onClick={HideDialog}></Button>
                    
                   
                </div>
            </div>
        )
    }

    const Dialog01 = () => {

        return(
            <div>
                 <style>
                    {`.circle-text {
                    border: 2px solid blue;
                    border-radius: 10px;
                    padding: 10px;
                    margin: 10px 0;
                    }`}
                </style>
                  <Dialog visible={dialogAplico} style={{ width: '350px' }} header="¡Aviso!" modal className="custom-dialog p-fluid" footer={DialogFooter} onHide={HideDialog}>
                         <div>
                            <p style={{ fontSize: '23px', color: '#333', textAlign: 'center' }}>
                               ¡Ha Aplicado a esta Vacante!
                              
                            </p>
                            <p className='circle-text' style={{ fontSize: '19px', color: '#333', textAlign: 'center' }}>
                               
                               Le llegará un correo informándole los resultados de su evaluación.
                            </p>
                         </div>
                  </Dialog>
            </div>
        )
      }



    return(
        <div>
        {Dialog01()}
        </div>
    )


}

export default DialogAplicando