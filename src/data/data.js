const sizes = {
    generalSizes: ['XS', 'S', 'M', 'L', 'XXL'],
    uniqueSize: ['ONESIZE'],
};

const genres =  {
    men: 'men',
    women: 'women'
}


export const items = [
    {
        id: new Date().getTime() ,
        productName: 'hat-women',
        productNumber: '7538721902',
        description: 'Fedora Hat',
        genre: genres.women,
        price: 62.00,
        size: sizes.uniqueSize,
        latestArrival: true,
    },
    {
        id: new Date().getTime() * 2,
        productName: 'stripe-shirt-women',
        productNumber: '010293401',
        description: 'Stripe Shirt',
        genre: genres.women,
        price: 35.00,
        size: sizes.generalSizes,
        latestArrival: true,
    },
    {
        id: new Date().getTime() * 3,
        productName: 'wide-legs-pants-women',
        productNumber: '010293402',
        description: 'Wide-leg Pants',
        genre: genres.women,
        price: 20.00,
        size: sizes.generalSizes,
        latestArrival: true,
    },
    {
        id: new Date().getTime() * 4,
        productName: 'hoodie-men',
        productNumber: '55742',
        description: 'Hoodie',
        genre: genres.men,
        price: 18.00,
        size: sizes.generalSizes,
        latestArrival: true,
    },
    {
        id: new Date().getTime() * 5,
        productName: 'leather-jacket-men',
        productNumber: '424212',
        description: 'Leather Jacket',
        genre: genres.men,
        price: 48.00,
        size: sizes.generalSizes,
        latestArrival: true,
    },

]