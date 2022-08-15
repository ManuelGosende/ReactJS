import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
 
        <input 
            ref={ inputRef } // EL useRef APUNTA A ESTE ELEMENTO, PODRÍA HACER UNA REFERENCIA A CUALQUIER OTRO ELEMENTO HTML
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
