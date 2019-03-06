import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

class Product extends Component {
  render() {
    const {id, urlToImage,description, price, inCart} = this.props.product;

    return(

      <div class="col-md-4">
        <div class="card mb-4 box-shadow">
        <img class="card-img-top" src={urlToImage} alt="" />
        <div class="card-body">
          <p class="card-text">{description}</p>
            <ProductConsumer>
            {
              value => (
                <div class="d-flex justify-content-between align-items-center"
                onClick= {()=>value.handleDetail(id)}>
  
                <Link to='/details'>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                  </button>
                </Link>

              <button class="btn btn-info"
                disable={inCart ? true : false}
                onClick={()=>{
                  value.addToCart(id)
                }}
                >
                {inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    {""}
                    in cart
                  </p>
                ): (<i class="fas fa-shopping-cart">Add to cart</i>
                )}
              </button>
              </div>
              )
            }

              </ProductConsumer>
            <strong>{price} $ </strong>
          </div>
        </div>
      </div>

      );
      }


}

export default Product


// return(
//   <div>
//     <img class="card-img-top" src={props.product.urlToImage} alt="" />
//     <div class="card-body">
//       <p class="card-text">{props.product.description}</p>
//       <div class="d-flex justify-content-between align-items-center">
//         <div class="btn-group">
//           <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//           <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//         </div>
//         <button class="btn btn-info">
//           <i class="fas fa-shopping-cart">Add to cart</i>
//         </button>
//       </div>
//     </div>
//   </div>
//   );
