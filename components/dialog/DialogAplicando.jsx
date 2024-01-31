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
                  <Dialog visible={dialogAplico} style={{ width: '350px' }} header="¡Aviso!" modal className="custom-dialog p-fluid" footer={DialogFooter} onHide={HideDialog}>
                         <div>
                            <p style={{ fontSize: '13px', color: '#333', textAlign: 'center' }}>
                               ¡Ha Aplicado a esta Vacante!
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