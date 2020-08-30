import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipiesContext } from '../context/RecipiesContext';

const RecipiesList = () => {

    //distructuring recipies
    const { recipies } = useContext(RecipiesContext);

    return ( 
        <div className="row mt-5">
            {recipies.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipies={recipe}
                />
            ))}
        </div>
     );
}
 
export default RecipiesList;