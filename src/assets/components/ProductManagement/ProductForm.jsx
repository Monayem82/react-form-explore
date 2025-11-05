import React, {  useContext, useState } from 'react';
import { ProductContext } from './UseContextApi';

const ProductForm = ({ hadleAddNewProduct }) => {
    const [error, setError] = useState('')

    const [money,setMoney]=useContext(ProductContext)

    const handleProductSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.productName.value)
        const name = e.target.productName.value
        const price = e.target.productPrice.value
        const quantity = e.target.Qunatity.value

        console.log(name.length)
        if (name.length < 2) {
            setError(`Name must be 2 or more charecters ${name}`)
            return
        }
        else {
            setError('')
        }
        const newProduct = {
            name,
            price,
            quantity,
        }
        hadleAddNewProduct(newProduct)


    }

    return (
        <div>
            <h1>Submit your Product {money} </h1>
            <button onClick={()=>setMoney(money+1000)}>Add 1000Tk</button>
            <h3><span>{error}</span></h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="productName" id="" placeholder='name' />
                <br />
                <input type="text" name="productPrice" id="" placeholder='price' />
                <br />
                <input type="text" name="Qunatity" id="" placeholder='quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;