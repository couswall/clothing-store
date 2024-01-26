import { items } from "../data/data"

export const getItemByProductNumber = ( number ) => {

    return items.find( item => item.productNumber === number );
    
}
