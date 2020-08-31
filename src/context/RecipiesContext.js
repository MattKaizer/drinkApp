import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecipiesContext = createContext();

const RecipiesProvider = (props) => {
    //states
    const [recipies, setRecipies] = useState([]);
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    });
    const [consulting, setConsulting] = useState(false);

    //distructuring
    const { ingredient, category } = search;

useEffect(() => {
    if (consulting) {
        const getRecipies = async () => {
            const ingredientfilterUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}
            &c=${category}`;
            const response = await Axios(ingredientfilterUrl)
            setRecipies(response.data.drinks)
            console.log(response.data.drinks)
        }
        getRecipies();
    }
}, [search, ingredient, consulting, category]);

    return ( 
        <RecipiesContext.Provider
            value={{
                recipies,
                setSearch,
                setConsulting,
            }}
        >
            {props.children}
        </RecipiesContext.Provider>
     );
}
 
export default RecipiesProvider;
