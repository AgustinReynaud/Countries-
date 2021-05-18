import React from 'react';
import './Home.css';
import Filter from '../Filter/Filter'
import Countries from '../Countries/Countries';
import Order from '../Order/Order';
import Footer from '../Footer/Footer'
import Search from '../Search/Search';


function Home() {
  return (
    <div className="Div">
      <div className='Barra'>
        <Search />
        <Filter />
        <Order />
      </div>
      <div>

      <Countries />
      </div>
     
      <div className='foter'>

      <Footer />
      </div>
    </div>

  )
}

export default Home;