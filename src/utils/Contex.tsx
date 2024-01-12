import React, { createContext, useState } from "react";
import { IProduct } from "../productinterface/Product";
import axios from "axios";

interface IModalContext {
    products: IProduct[];
    getProduct: () => void;
    searchProducts: (query: string) => void;
}

export const ModalContext = createContext<IModalContext>({
    products: [],
    getProduct: async () => {},
    searchProducts: () => {},
});

export const ModalState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    const getProduct = async () => {
        try {
            const res = await axios.get<IProduct[]>("https://fakestoreapi.com/products");
            setProducts(res.data);
            setFilteredProducts(res.data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    const searchProducts = (query: string) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const values = {
        products: filteredProducts,
        getProduct,
        searchProducts,
    };

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    );
};
