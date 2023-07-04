import React from 'react';
import Home from './Home';
import Footer from './Footer';

export const App = () => {
  return (
    <div class="container ">

      <center>
        <h1>Admin panel</h1>
        <Home/>
        <Footer />
      </center>

    </div>
  )
}
export default App;