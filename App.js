import React,{Component} from "react";
import Header from "./components/Header"
import Filters from "./components/Filters"
import ProductGrid from "./components/ProductGrid"
import Footer from "./components/Footer";
import "./App.css"

class App extends Component{
  state={
    products:[],
    selectedCategory:"all"
  }
  componentDidMount(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>this.setState({products:data}))
    .catch ((err)=>console.log("Error fetching products:",err));
  }
  setSelectedCategory=(category)=>{
    this.setState({selectedCategory:category})
  }
  render(){
    const {products,selectedCategory}=this.state
    const filteredProducts = 
        selectedCategory === "all" ? products : 
        products.filter((p)=>p.category === selectedCategory)
    return(
      <div>
        < Header/>
        <main className="main-section">
            <Filters setSelectedCategory={this.setSelectedCategory} />
            <ProductGrid products={filteredProducts} />
        </main>
        <Footer />
      </div>
    )
  }
}
export default App