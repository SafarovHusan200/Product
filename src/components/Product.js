import React, { Component } from 'react';

class Product extends Component {
  render() {
    const {name, img, title, price, discount} = this.props;
    return (

            <div className='product'>
                <img src={img} alt="" />
                <h3 className="name">{name}</h3>
                <p className="title">{title}</p>
                <h4 className="price">$ {price}</h4>
                <button className='btn'>view product</button>
                <div className="discount">- %{discount}</div>
            </div>

    )
  }
}

export default Product;