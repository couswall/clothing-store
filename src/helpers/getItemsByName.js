import { items } from "../data/data";

export const getItemsByName = ( name = '' ) => {
    
    name = name.toLocaleLowerCase().trim();

    if ( name.length === 0) return []; 

    return items.filter( item => item.description.toLocaleLowerCase().includes( name ));

}
