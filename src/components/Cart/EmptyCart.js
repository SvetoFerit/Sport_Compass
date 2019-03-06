import React from 'react';

const EmptyCart=() => {

      return (
        <div>
        <div className="container mt-5">
          <div className = "row">
            <div className="col-10 mx-auto text-center text-title text-capitalize">
            <h1>Empty Cart</h1>
            </div>
          </div>
        </div>
        <footer class="text-muted">
          <div class="container py-4">
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          </div>
        </footer>
        </div>
      );

}

export default EmptyCart;
