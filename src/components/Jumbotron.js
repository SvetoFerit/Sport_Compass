import React from 'react';


const Jumbotron = (props)=>{
    return(
    <div>
    <section class="jumbotron m-0 text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#top" class="btn btn-primary my-2">Main call to action</a>
          <a href="#top" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </section>
    </div>

    );

}

export default Jumbotron
