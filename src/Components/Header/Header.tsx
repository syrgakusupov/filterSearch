import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",gap:'100px',margin:'20px',fontSize:'30px',textTransform:'uppercase'}}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Catalog'>Catalog</NavLink>


        </div>
    );
};

export default Header;