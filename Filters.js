import React,{Component} from "react";

class Filters extends Component{
    categories =[
        {id:"all" ,name:"All"},
        {id:"men's clothing" ,name:"Men"},
        {id:"women's clothing" ,name:"Women"},
        {id:"jewelery",name:"jewelery"},
        {id:"electronics",name:"Electronics"},
    ]
    render(){
        const {setSelectedCategory}=this.props
        return(
            <aside className="filters">
                <h2>Filters</h2>
                {this.categories.map((cat=>(
                    <button
                     key={cat.id}
                     className="filter-btn"
                     onClick={()=>setSelectedCategory(cat.id)}
                    >
                    {cat.name}
                    </button>
                )))}
            </aside>
        )
    }
}
export default Filters