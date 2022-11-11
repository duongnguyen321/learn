import React from 'react';
import { isAuthenticated, getCartProducts } from '../repository';
import {  Redirect, Link } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		if (!cart) return; 
		getCartProducts(cart).then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].price * products[i].qty;
			}
	    	this.setState({ products, total });
	    });
	}

	render() {
		if (!isAuthenticated()) return (<Redirect to="/login" />);
		const { products, total } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Thanh Toán</h3>
				<hr/>
				{
					products.map((product, index) => 
						<div key={index}>
							<p>
								{product.name} 
								<small> (Số Lượng: {product.qty})</small>
								<span className="float-right text-primary">${product.qty * product.price}</span>
							</p><hr/>
						</div>
					)
				}
				<hr/>
				{ products.length ? <div><h4><small>Tổng tiền:</small><span className="float-right text-primary">${total}</span></h4><hr/></div>: ''}
				{ !products.length ? <h3 className="text-warning">Không có gì trong giỏ hàng</h3>: ''}
				{ products.length ? <button className="btn btn-success float-right" onClick={() => alert('Thanh Toán thành công')}>Thanh Toán</button>: '' }
				<Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Thoát</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
