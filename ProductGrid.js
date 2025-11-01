import React,{Component} from "react";
import ProductCard from "./ProductCard"

class ProductGrid extends Component{
    render(){
        const {products}=this.props;
        return(
            <div className="product-grid">
                {products.map((item)=>(
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        )
    }
}
export default ProductGrid