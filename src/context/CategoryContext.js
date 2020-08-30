import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//context
export const CategoryContext = createContext();

//Provider (where fn & states are)
const CategoryProvider = (props) => {
    //context state
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categoriesResponse = await Axios(categoryUrl)
            setCategories(categoriesResponse.data.drinks)
        }
        getCategories()
    }, [])

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;