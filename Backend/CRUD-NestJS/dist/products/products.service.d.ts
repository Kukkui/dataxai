import { Product } from "./product.model";
export declare class ProductsService {
    products: Product[];
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    private findProduct;
    deleteProduct(prodId: string): void;
}
