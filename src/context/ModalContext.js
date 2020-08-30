import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider State
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipe, setRecipe] = useState({}); //save the actual recipe

    //Once recipe is selected, get it from API
    useEffect(() => {
        const getRecipe = async () => {
            if (!idRecipe) return;
            const recipeUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const response = await Axios(recipeUrl);
            setRecipe(response.data.drinks[0])
            // console.log(response.data.drinks)
        }
        getRecipe();
    }, [idRecipe])

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