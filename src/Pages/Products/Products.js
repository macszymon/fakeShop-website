import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Products.css';
import {MdArrowDropDown} from 'react-icons/md'
import Card from '../../components/Card/Card';
import data from '../../data';

function Products() {
  const [isShownType, setIsShownType] = useState(false)
  const [isShownPrice, setIsShownPrice] = useState(false)
  let { category, type } = useParams();
  let filteredData = [];

  if (type !=='all') {
    if(category === 'men' || category === 'women') {
      filteredData = data.filter(item => item.category === category && item.type === type)
    } else if (category === 'collection') {
      filteredData = data.filter(item => item.isFromNewCollection === true && (item.category === type || item.type === type))
    } else if (category === 'sale') {
      filteredData = data.filter(item => item.isOnSale === true && (item.type === type || item.category === type))
    } else if (category === 'bestsellers') {
      filteredData = data.filter(item => item.isBestseller === true && (item.type === type || item.category === type))
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
        <h1>{category + ' | ' + type + ' | ' + filteredData.length + ' results'}</h1>
      </div>
      <div className="products__filters">
        {category!=='bestsellers' && <div className="products__filter-wrapper">
        <button className='products__btn' onClick={() => setIsShownType(prev => !prev)}>Type <MdArrowDropDown/>
        </button>
        {isShownType &&       
          <ul className="products__btn-more">
            <li><Link to={`/products/${category}/top`}>Tops</Link></li>
            <li><Link to={`/products/${category}/bottom`}>Bottoms</Link></li>
            <li><Link to={`/products/${category}/full-body`}>Full Body</Link></li>
            <li><Link to={`/products/${category}/shoes`}>Shoes</Link></li>
            <li><Link to={`/products/${category}/accessories`}>Accessories</Link></li>
          </ul>}
        </div>}
      </div>
      {filteredData.length >= 1 ? <div className="products__cards"> {filteredData.map(item => <Card key={item.id} item={item} />)}  </div> : <h1 className='products__no-result'>No results</h1>}
    </main>
  );
}

export default Products;
