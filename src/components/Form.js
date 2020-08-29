import React, { useContext } from 'react';
import { ContextCategory } from '../context/ContextCategory';

const Form = () => {


    return ( 
        <form 
            className="col-12"
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
                        placeholder="Search by ingredient"    
                    />
                </div>
                <div className="col-md-4">
                    <select name="category" className="form-control">
                        <option value="">-- Select Category --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="text" 
                        className="btn btn-block btn-primary" 
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;