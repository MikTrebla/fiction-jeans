import React, {Component} from 'react';
import './Product.css';
import axios from 'axios';
class Product extends Component {
    state = {
        productName:'',
        productDescription:'',
        productPrice:'',
        productImage:'',
        productID:''
    }

    componentDidMount = () => {
        this.getProductInfo();
    }

    getProductInfo = () => {
        let productID=(window.location.href).match(/(product).+\w/g)

        axios.get(`/api/${productID}`)
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
                    <p>{this.state.productPrice}</p>
                    <p>{this.state.productDescription}</p>
                    <img alt={this.state.productName} src={this.state.productImage}></img>
                </div>
                <button id={this.state.productID} >
                    Add to cart
                </button>
            </div>
        )
    }
}

export default Product;