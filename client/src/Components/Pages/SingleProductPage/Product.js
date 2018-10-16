import React, {Component} from 'react';
import './Product.css';
import axios from 'axios';
class Product extends Component {
    state = {
        productName:'',
        productDescription:'',
        productPrice:'',
        productImage:'',
        productID:'',
        quantityPurchase:1
    }

    componentDidMount = () => {
        this.getProductInfo();
    }

    getProductInfo = () => {
        let productID=(window.location.href).split('?id=');
        axios.get(`/api/product/${productID[1]}`)
        .then(response => {
            this.setState({
                productName:response.data[0].productName,
                productDescription:response.data[0].productDescription,
                productPrice:response.data[0].productPrice,
                productImage:(response.data[0].productImage?response.data[0].productImage:response.data[0].defaultImage),
                productID: response.data[0]._id
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    render() {
        return (
            <div>
                Product Page
                <div >
                    <p>{this.state.productName}</p>
                    <p>${this.state.productPrice}</p>
                    <p>{this.state.productDescription}</p>
                    <img alt={this.state.productName} src={this.state.productImage}></img>
                </div>
                
                <div>
                <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                    <button id={this.state.productID} >
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }
}

export default Product;