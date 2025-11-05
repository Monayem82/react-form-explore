import React, {  useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import { ProductContext } from './UseContextApi';



const ProductManagement = () => {

    const [money,setMoney]=useState(0)

    const [products, setProducts] = useState([])

    const hadleAddNewProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }
    // console.log(products)

    return (
        <div>
            <h1>Product Management</h1>
            

            <div>
                <ProductContext.Provider value={[money,setMoney]}>
                    <ProductForm hadleAddNewProduct={hadleAddNewProduct}></ProductForm>
                    <ProductTable products={products}></ProductTable>
                </ProductContext.Provider>
            </div>
        </div>
    );
};

export default ProductManagement;