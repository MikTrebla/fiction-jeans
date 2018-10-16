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
            let search = {search:document.getElementById('search').value}
            
            axios.post('/api/filterByInput', search)
            .then(response => {
                if(response.data.length===0){
                    this.getProducts();
                }
                else {
                    this.setState({
                        productsList:response.data
                    })
                }
            })
            .catch(error => {
                console.error(error);
            })
        }
    }
    onClickFilter = (event) => {
        event.preventDefault();
        let filter = {category:event.target.value}
        axios.post('/api/filterByCategory',filter)
        .then(response => {
            this.setState({
                productsList:response.data
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    removeFilters = () => {
        this.setState({
            search:''
        })
        this.getProducts();
    }
    handleSingleItemPage = id => {
        axios.post(`/shop/${id}`)
        .then(response => {
            this.props.history.push(`/product?id=${id}`);
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
                            id='search' onKeyDown = {this.handleSearchProduct} onChange = {this.handleChange} name='search' value={this.state.search} type='text' placeholder='Search for an item 🔎'>
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
                            value='accessory' className='filter-product'>Accessories
                        </button>
                        <button className='filter-product' onClick={this.removeFilters}>
                            Remove Filters
                        </button>
                    </div>
                    <div id ='store'>
                        <ul>
                            {this.state.productsList.map((item, i) => {
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