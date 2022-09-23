import { ArgumentNode } from "graphql";

import { productModel } from "../models/products.model";


export default  {
    Query: {
        products: () => {
            return productModel.getAll();
        },
        productsByPrice: (_: any, args: {min: number, max: number}) => {
            const {min, max} = args;            
            return productModel.getProductsByPrice(min, max);
        }
    }
};
