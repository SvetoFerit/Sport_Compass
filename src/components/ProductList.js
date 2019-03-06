import React, {Component} from 'react'
import Product from './Product'
import {ProductConsumer} from '../context'
import { productInfo } from "../ProductInfo";
class ProductList extends Component {

  state = {
      products: productInfo
    };

    render() {
      return (
        <React.Fragment>
            <div class="album py-5 bg-light">
              <div class="container">
                <div class="row">

                  <ProductConsumer>
                    {data => {
                      return data.products.map(product => {
                        return <Product key={product.id} product={product} />
                      })
                      }}
                  </ProductConsumer>
                </div>

              </div>
            </div>
            <footer class="text-muted">
              <div class="container py-4">
                <p class="float-right">
                  <a href="#top">Back to top</a>
                </p>
                <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
              </div>
            </footer>
        </React.Fragment>
      );

  }



}

export default ProductList
