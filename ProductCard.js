import React,{Component} from "react";

class ProductCard extends Component{
    render(){
        const {product}=this.props
        return(
            <div className="product-card">
                <img src={product.image}
                alt={`Product: ${product.title}`}
                className="product-image" />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-btn">Add to Card</button>
            </div>
        )
    }
}
export default ProductCard