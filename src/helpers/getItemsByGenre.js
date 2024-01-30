import { items } from "../data/data"

export const getItemsByGenre = ( genre ) => {
    
    return items.filter( item => item.genre === genre);


}
