const products = [
    {
        id:'1',
        name: 'guitarra',
        price: '1000',
        img: '/images/guitarra-electricatelecaster.jpg',
        stock: 5,
        description: 'dedeedee'
    },
    {
        id:'2',
        name: 'bajo',
        price: '500',
        img: '/images/bajo.jpg',
        stock: 5,
        description: 'swswsws'

    },
    {
        id:'3',
        name: 'amplificador',
        price: '200',
        img: '/images/amplificador.jpg',
        stock: 5,
        description: 'frfrffffr'
    }
]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        },2000)
    })
};

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}




