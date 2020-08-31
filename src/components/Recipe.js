import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



//Style component for modal
const useStyles = makeStyles((theme) => ({
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
}));
const Recipe = ({recipies}) => {
    //distructuring context
    const {recipe, setIdRecipe, setRecipe} = useContext(ModalContext);
    //Modal open/close
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // console.log(recipe);

    const showIngredients = recipe => {
        let ingredients = [];
        for (let i = 0; i < 16; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>{ recipe[`strIngredient${i}`] } { recipe[`strMeasure${i}`] }</li>
                )
            }
            
        }
        return ingredients;
    }

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
                            setIdRecipe(recipies.idDrink);
                            handleOpen();
                        }}
                     >
                         See Recipe
                     </button>
                     <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={() => {
                                setIdRecipe(null); //cleaning state
                                setRecipe({});
                                handleClose();
                            }}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title">{recipe.strDrink}</h2>
                                <h3 className="mt-4">Insructions</h3>
                                <p id="transition-modal-description">
                                    {recipe.strInstructions}</p>
                                <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="img-fluid my-4"/>
                                <h4>Ingredients:</h4>
                                <ul>{showIngredients(recipe)}</ul>
                            </div>
                        </Fade>
                    </Modal>
                 </div>
            </div>
        </div>
     );
}
 
export default Recipe;