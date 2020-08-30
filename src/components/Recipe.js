import React, {useContext} from 'react';
import { ModalContext } from '../context/ModalContext';

const Recipe = ({recipies}) => {

    //distructuring context
    const {setIdRecipe} = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                 <h3 className="card-header">{recipies.strDrink}</h3>

                 <img className="card-img-top" src={recipies.strDrinkThumb} alt={`Imagen de ${recipies.strDrink}`} />

                 <div className="card-body">
                     <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipies.idDrink)
                        }}
                     >
                         See Recipe
                     </button>
                 </div>
            </div>
        </div>
     );
}
 
export default Recipe;