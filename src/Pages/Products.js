import React from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import {MdArrowDropDown} from 'react-icons/md'
import Card from '../components/Card/Card';
import data from '../data';

function Products() {
  let { category } = useParams();
  let filteredData = [];

  if(category === 'men' || category === 'women') {
    filteredData = data.filter(item => item.category === category)
  } else if (category === 'collection') {
    filteredData = data.filter(item => item.isFromNewCollection === true)
  } else {
    filteredData = data
  }

  return (
    <main className='products'>
      <div className='products__header'>
        <h1>{category + ' products'}</h1>
      </div>
      <div className="products__filters">
        <button className="products__btn">Product type <MdArrowDropDown size={20}/></button>
        <button className="products__btn">Price <MdArrowDropDown size={20}/></button>
      </div>
      <div className="products__cards">
      {filteredData.map(item => <Card item={item} />)}
      </div>
    </main>
  );
}

export default Products;
