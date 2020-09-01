import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipiesContext } from '../context/RecipiesContext';

const RecipiesList = () => {

    //distructuring recipies
    const { recipies } = useContext(RecipiesContext);

    return ( 
        <div className="row mt-5">
            {recipies != null ?
            recipies.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipies={recipe}
                />
            )) : null}
        </div>
     );
}
 
export default RecipiesList;