import { items } from "../data/data"
import { shuffleArray } from "./shuffleArray";

export const getRecommendations = ( id, genre ) => {
    
    const recommendationsArray = items.filter( item => item.id !== id && item.genre === genre );

    const finalArray = shuffleArray( recommendationsArray, 9 );

    return finalArray;
}
