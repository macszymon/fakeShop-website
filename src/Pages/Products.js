import React from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import {MdArrowDropDown} from 'react-icons/md'
import Card from '../components/Card/Card';
import data from '../data';

function Products() {
  let { category, type } = useParams();
  let filteredData = [];

  if (type !=='all') {
    if(category === 'men' || category === 'women') {
      filteredData = data.filter(item => item.category === category && item.type === type)
    } else if (category === 'collection') {
      filteredData = data.filter(item => item.isFromNewCollection === true && item.category === type)
    } else if (category === 'sale') {
      filteredData = data.filter(item => item.isOnSale === true && item.category === type)
    } else if (category === 'bestsellers') {
      filteredData = data.filter(item => item.isBestseller === true && item.category === type)
    } 
  } else {
    if(category === 'men' || category === 'women') {
      filteredData = data.filter(item => item.category === category)
    } else if (category === 'collection') {
      filteredData = data.filter(item => item.isFromNewCollection === true)
    } else if (category === 'sale') {
      filteredData = data.filter(item => item.isOnSale === true)
    } else if (category === 'bestsellers') {
      filteredData = data.filter(item => item.isBestseller === true)
    } 
  }
  return (
    <main className='products'>
      <div className='products__header'>
        <h1>{category + ' | ' + type}</h1>
      </div>
      <div className="products__filters">
        <button className="products__btn">Product type <MdArrowDropDown size={20}/></button>
        <button className="products__btn">Price <MdArrowDropDown size={20}/></button>
      </div>
      
      {filteredData.length >= 1 ? <div className="products__cards"> {filteredData.map(item => <Card key={item.id} item={item} />)}  </div> : <h1 className='products__no-result'>No results</h1>}
    </main>
  );
}

export default Products;
