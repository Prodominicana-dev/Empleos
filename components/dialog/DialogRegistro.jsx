import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';
import Link from 'next/link';
import { useState,useEffect } from 'react';

const DialogRegistro = ({dialogRegistro,setDialogRegistro}) => {

     const HideDialog = () => {
 
        setDialogRegistro(false);

     }

   
     

    const DialogFooter = () => {

        return(
            <div>
                <div className="d-flex justify-content-end ">
                    <Link href={`/registro/`}>
                       <Button className="mt-5 " label="REGÍSTRARTE" rounded text raised onClick={HideDialog}></Button>
                    </Link>
                    <Link href={`/login/`}>
                       <Button className="mt-5 " label="INICIAR SESIÓN" rounded text raised onClick={HideDialog}></Button>
                    </Link>
                </div>
            </div>
        )
    }

    const Dialog01 = () => {

        return(
            <div>
                  <Dialog visible={dialogRegistro} style={{ width: '350px' }} header="¡Aviso!" modal className="custom-dialog p-fluid" footer={DialogFooter} onHide={HideDialog}>
                         <div>
                            <p style={{ fontSize: '13px', color: '#333', textAlign: 'center' }}>
                               Para poder aplicar debes de Regístrarte o Iniciar Sesión.
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

export default DialogRegistro