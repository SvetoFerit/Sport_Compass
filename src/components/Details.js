import React,{Component} from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
  class Details extends Component {

    render() {
      return (
        <ProductConsumer>
          {
            value => {
              const {id, urlToImage,description, price,inCart}=value.detailProductInfo
              return (
                <div className="container py-5">
                {/* title */}
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                      <h1>title</h1>
                    </div>
                  </div>
                  {/* end of title */}
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={urlToImage} className="img-fluid" alt=""/>
                    </div>
                    {/* prdoduct info */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h1>model : title</h1>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by : <span className="text-uppercase">company</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          price : <span>$</span> {price}
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product :
                      </p>
                      <p className="text-muted lead">{description}</p>
                      {/* buttons */}
                    <div class="d-flex justify-content-between align-items-center">
                      <Link to="/">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Back to Album</button>
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
                    </div>
                </div>
              </div>
              )
            }
          }
        </ProductConsumer>
      );
  }
}

export default Details;
