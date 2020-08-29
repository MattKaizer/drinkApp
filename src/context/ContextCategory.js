import React, { createContext, useState, useEffect } from 'react';

//context
export const ContextCategory = createContext();

//Provider (where fn & states are)
const ProviderCategory = (props) => {
    //context state
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            
        }
    }, [])

    return (
        <ContextCategory.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </ContextCategory.Provider>
    );
}

export default ProviderCategory;