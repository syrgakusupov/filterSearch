import React, {useContext} from 'react';
import {ModalContext} from "../../utils/Contex";
import {NavLink} from "react-router-dom";

const CatalogRow = () => {
    const {products} = useContext(ModalContext)
    return (
        <div style={{display:"flex",flexWrap:"wrap",width:"1440px",justifyContent:"center"}}>

            {
                products.map((item) =>(
                    <div key={item.id} style={{
                        border:'3px solid black',
                        margin:20,
                        width:250,
                        borderRadius:"20px",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center",
                        padding:"20px"
                    }}>

                        <NavLink to={`/Params/${item.id}`}>
                            <img src={item.image} style={{width:100}} alt=""/>
                        </NavLink>
                        <p>{item.title}</p>
                        <button>add to card</button>

                    </div>
                ))
            }

        </div>
    );
};

export default CatalogRow;