import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';
import Link from 'next/link';
import { useState,useEffect } from 'react';

const DialogProfile = ({value,setValue,id}) => {

// const [dialog, setDialog] = useState(value);

// useEffect(() => {
//     // Actualizar dialog cuando value cambie
//     setDialog(value);
//   }, [value]);



// console.log(dialog)
//console.log(value)
     const HideDialog = () => {
 
        setValue(false);

     }

   
     

    const DialogFooter = () => {

        return(
            <div>
                <div className="d-flex justify-content-end ">
                    <Link href={`/formulario/${id}`}>
                       <Button className="mt-5 " label="Ir al perfil" rounded text raised onClick={HideDialog}></Button>
                    </Link>
                </div>
            </div>
        )
    }

    const Dialog01 = () => {

        return(
            <div>
                  <Dialog visible={value} style={{ width: '350px' }} header="¡Aviso!" modal className="custom-dialog p-fluid" footer={DialogFooter} onHide={HideDialog}>
                         <div>
                            <p style={{ fontSize: '13px', color: '#333', textAlign: 'center' }}>
                               Para poder aplicar debes de llenar tu perfil.
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

export default DialogProfile