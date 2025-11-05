import React from 'react';

const TableShow = ({product,index}) => {
    const {name,price,quantity}=product
    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    );
};

export default TableShow;