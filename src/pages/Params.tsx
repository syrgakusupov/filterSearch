import React, { useEffect, useState } from 'react';
import { IProduct } from '../productinterface/Product';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Params = () => {
    const [product, setProduct] = useState<IProduct>();
    const params = useParams();

    useEffect(() => {
        axios.get<IProduct>(`https://fakestoreapi.com/products/${params.id}`)
            .then(({data}) => setProduct(data))
    },[])

    return (
        <div>
            {product && (
                <div>
                    <img src={product.image} alt='' style={{width:"200px"}}/>
                    <h3>{product.title}</h3>
                    <span>{product.description}</span>
                </div>
            )}
        </div>
    );
};

export default Params;
