import React, {useContext, useEffect} from 'react';
import {ModalContext} from "../../utils/Contex";
import CatalogRow from "./CatalogRow";
import Search from "../../Components/Search/Search";


const Catalog = () => {
    const {getProduct} = useContext(ModalContext)


    useEffect(() => {
        getProduct()

    }, [])


    return (
        <div>

            <Search/>
            <CatalogRow/>
        </div>
    );
};

export default Catalog;