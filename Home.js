import React from 'react'
import Header from './Header'
import Table from './Table'
import Filter from './Filter'
import Card from './Card'
const Home = () => {
  return (
    <div>
        <center>
            <Header/>
            <Table />
            <Filter />
            <Card />
        </center>
    </div>
  )
}

export default Home