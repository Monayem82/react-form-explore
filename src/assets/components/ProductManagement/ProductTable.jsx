import React from 'react';
import TableShow from './TableShow';

const ProductTable = ({ products }) => {
    console.log(products)
    return (
        <div>
            <h3>Totall Products :{products.length}</h3>


            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=><TableShow key={index} product={product} index={index}></TableShow>)
                    }
                </tbody>
                
            </table>
            <button>Remove product</button>


        </div>
    );
};

export default ProductTable;