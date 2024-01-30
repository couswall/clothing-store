import { categories } from "../data/data"

export const getCategories = ( genre = '' ) => {
    
    if ( genre === 'men') {
        return ['All', ...Object.values(categories.men) ]
    }else if ( genre === 'women') {
        return ['All', ...Object.values(categories.women) ]
    }
    else {
        return [];
    }

    // const arrayOfCategories = array.map( item => item.category );
    // return [...new Set( arrayOfCategories )];

}
