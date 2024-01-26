import { useEffect, useReducer } from "react"
import { cartReducer } from "../context"
import { types } from "../types/types";


const init = () => {

    // si el localStorage es undefined entonces se regreará un arreglo vacio 
    return JSON.parse( localStorage.getItem('cart')) || [] ;
};


export const useCart = () => {
    
    const [ cart, dispatch ] = useReducer( cartReducer, [] , init  );
    

    //Guarda en local storage cada vez que el cart tenga algun cambio 
    useEffect(() => {
        localStorage.setItem( 'cart', JSON.stringify( cart ) );

    }, [ cart ] );



    // Add Item to cart
    const onAddItem = ( item ) => {

        const action = {
            type: types.addToCart,
            payload: item,
        }
        dispatch(action);
    }

    const onDeleteItem = ( { id, size } ) => {

        const action = {
            type: types.removeItem,
            payload: { id, size },
        }

        dispatch( action );
    }






    return {
        cart, 
        onAddItem,
        onDeleteItem,
    }
}
