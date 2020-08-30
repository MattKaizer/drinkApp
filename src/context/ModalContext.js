import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider State
    const [idRecipe, setIdRecipe] = useState(null);

    return ( 
        <ModalContext.Provider
            value={{
                setIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;