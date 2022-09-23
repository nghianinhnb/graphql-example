export interface Product {
    id: string,
    description: string,
    price: number,
};


const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
    },
] as Product[];


const getAll = (): Product[] => {    
    return products;
};


const getProductsByPrice = (min: number, max: number): Product[] => {
    return products.filter(item => {
        return min < item.price && item.price < max;
    });
};


const addProduct = (id: string, description: string, price: number): Product => {
    const newProduct: Product = {
        id,
        description,
        price,
    };

    products.push(newProduct);
    
    return newProduct;
}


export const productModel = {
    getAll,
    getProductsByPrice,
    addProduct,
};
