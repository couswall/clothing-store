
export const shuffleArray = ( array = [] , itemsNumber = 10 ) => {
    
    // const shuffleArray = array.sort( () => Math.random() - 0.5 );

    // intercambia elementos array[i] y array[j]
    // usamos la sintaxis "asignación de desestructuración" para lograr eso
    // lo mismo puede ser escrito como:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]];
      }


    return array.slice(0, itemsNumber);

}
