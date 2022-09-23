import { ArgumentNode } from "graphql";

import { productModel, Product } from "../models/products.model";


export default  {
    Query: {
        products: () => {
            return productModel.getAll();
        },
        productsByPrice: (_: any, args: {min: number, max: number}) => {
            const {min, max} = args;            
            return productModel.getProductsByPrice(min, max);
        }
    },

    Mutation: {
        addProduct: (_: any, args: any) => {
            const {id, description, price} = args;
            console.log({id, description, price});
            
            return productModel.addProduct(id, description, price);
        }
    }
};
