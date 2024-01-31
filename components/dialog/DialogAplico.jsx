import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';


const DialogAplico = ({dialogAplico,setDialogAplico}) => {

     const HideDialog = () => {
 
        setDialogAplico(false);

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
                               Ya aplico en esta vacante.
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

export default DialogAplico