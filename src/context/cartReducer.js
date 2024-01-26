import { types } from "../types/types";

export const cartReducer = ( state = [], action ) => {
    
    switch( action.type ){

        // Añadir al carrito
        case types.addToCart: {

            /* Se usa el método findIndex para buscar si en el arreglo hay algún item que se encuentre repetido por id y por talla
            
            -El método findIndex regresa el número del index en caso de que si haya encontrado el mismo producto que se intenta agregar al carrito y que es de la misma talla
            -En caso de que no encuentre algún producto regresa el valor de -1
            */
            const itemIndex = state.findIndex( item => item.id === action.payload.id && item.size === action.payload.size);
            
            // Si se encontró algún indice en itemIndex significa de que ya existe en el carrito. En caso de que no se encuentre, se agrega el item directamente al carrito
            if ( itemIndex !== -1) {
                
                // Se crea el nuevo arreglo de carrito iterando cada uno de los productos que ya se encuentran en el
                return state.map( item => {

                    /* 
                        -Si el elemento cumple con la condicion de que ya exista dentro del carrito y además la talla es la misma entonces se hace una actualización de ese item. 
                        -Se actualiza la cantidad que se sumaría la cantidad actual más la cantidad nueva del nuevo producto que se añade 
                        -Finalmente se actualizaría el currentPrice. Sumando la cantidad actual + la nueva cantidad y el resultado de eso se multiplica por el precio
                    */
                    
                    if ( item.id === action.payload.id && item.size === action.payload.size ) {
            
                        return{
                            ...item, 
                            quantity: item.quantity + action.payload.quantity,
                            currentPrice: ( item.quantity + action.payload.quantity ) * item.price
                        }
                    }

                    // En caso de que no se cumpla esta condición entonces los items restantes se añadirán al nuevo arreglo que se esta creando
                    return item;
                })

            }else{
                return [...state, action.payload]
            }

            
        }
        

        //Delete item 
        case types.removeItem: {
            
            return state.filter( item => item.id !== action.payload.id || item.size !== action.payload.size );
        }

        default: 
            return state;
    }

}
