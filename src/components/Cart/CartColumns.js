import React from 'react';

  const CartColumns=() => {

      return (
        
          <div class="container-fluid text-center d-none d-lg-block">
            <div class="row">
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Products</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Name of product</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Price</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Quantity</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Remove</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">total</p>
              </div>

        </div>
        </div>
      );

}

export default CartColumns;
