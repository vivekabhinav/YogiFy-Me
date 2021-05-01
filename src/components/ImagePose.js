import React, { Component } from 'react'
import Product from "./ImagePoseCard"



import {ProductConsumer,ProductProvider} from "./context"
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
export default class ProductList extends Component {
    render() {
        
        return (
           <React.Fragment>
               <div className="py-5">
                <div className="container">

<div  className="row"  >
<ProductProvider>
<ProductConsumer>
    {value=>{
        return value.products.map(product =>{
            console.log("Product",product.img)
            return <Product key={product.id} product={product}/>
            
        })
    }}
</ProductConsumer>
</ProductProvider>
</div>
                </div>
               </div>
           </React.Fragment>
    
            //     <Product />
            
        )
    }
}
