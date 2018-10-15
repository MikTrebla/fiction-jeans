import React, {Component} from 'react';
import axios from 'axios';
import './Store.css';
class Store extends Component {
    state = {
        productsList:[],
        productID:[],
        search:''
    }
    componentDidMount = () => {
        this.getProducts();
    }
    getProducts = () => {
        axios.get('/api/getproduct')
        .then(results=> {
            let ID = results.data.map( item => {
                return item._id
            })
            this.setState({
                productsList:results.data,
                productID:ID
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    onClickFilter = (event) => {
        console.log(event.target.value);
        // api route search by filter with event.target.value as search term
    }
    handleChange = event => {
        if (event.key==='Enter') {
            console.log('enter');
        }
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSearchProduct = (event) => {
        if (event.key==='Enter') {
            event.preventDefault();
            //do routing based on search term
        }
    }
    handleSingleItemPage = id => {
        console.log(id);
        axios.post(`/shop/${id}`)
        .then(response => {
            console.log('response:', response);
            this.props.history.push(`/product/${id}`);
        })
        .catch(error => {
            console.error(error);
        })
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div id='filters'>
                        <input 
                            onKeyDown = {this.handleSearchProduct} onChange = {this.handleChange} name='search' value={this.state.search} type='text' placeholder='Search for an item 🔎'>
                        </input>
                        <button 
                            onClick={this.onClickFilter}
                            value='jeans' className='filter-product'>Jeans
                        </button>
                        <button 
                            onClick={this.onClickFilter}
                            value='outerwear' className='filter-product'>Outer Wear
                        </button>
                        <button 
                            onClick={this.onClickFilter}
                            value='shirts' className='filter-product'>Shirts
                        </button>
                        <button 
                            onClick={this.onClickFilter}
                            value='accessories' className='filter-product'>Accessories
                        </button>
                    </div>
                    <div id ='store'>
                        <ul>
                            {this.state.productsList===[]?<p>Uh oh, something went wrong.</p>:this.state.productsList.map((item, i) => {
                                return (
                                    <div key={i} className='product-container'>
                                        <li 
                                            className='product-name'>{item.productName}
                                        </li>
                                        <li className='product-price'>
                                            ${item.productPrice}
                                        </li>
                                        <a onClick={() => {this.handleSingleItemPage(item._id)}} >
                                            <img 
                                                className='product-image'alt={item.productName} src={item.productImage?item.productImage: item.defaultImage}>
                                            </img>
                                        </a>
                                        <p className='product-description'>
                                            {item.productDescription}
                                        </p>
                                    </div>
                                    
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Store;