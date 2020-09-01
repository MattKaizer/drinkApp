import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipiesContext } from '../context/RecipiesContext';

const Form = () => {
    //form state
    const [searchQuery, setSearchQuery] = useState({
        ingredient: '',
        category: ''
    }); 

    //handler
    const handlerChange = e => {
        setSearchQuery({
            ...searchQuery,
            [e.target.name] : e.target.value
        })
    }

    //in this case i use context instead of passing props to the component
    const { categories } = useContext(CategoryContext);
    const { setSearch, setConsulting } = useContext(RecipiesContext);

    return ( 
        <form 
            className="col-12"
            onSubmit={
                e => {
                    e.preventDefault();
                    setSearch(searchQuery);
                    setConsulting(true);
                }
            }
        >
            <fieldset className="text-center">
                <legend>
                    Search at your taste
                </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="ingredient"
                        placeholder="Add an ingredient, like: tequila"
                        onChange={handlerChange}    
                    />
                </div>
                <div className="col-md-4">
                    <select name="category" 
                        className="form-control"
                        onChange={handlerChange}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory} 
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary" 
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;