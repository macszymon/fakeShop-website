import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Products.css';
import { MdArrowDropDown } from 'react-icons/md';
import Card from '../../components/Card/Card';
import data from '../../data';

function Products() {
  const [isShownType, setIsShownType] = useState(false);
  let { gender, type, subtype } = useParams();
  let filteredData = [];

  if (type !== 'all' && !subtype) {
    filteredData = data.filter(
      (item) => item.category === gender && item.type === type
    );
  } else if (type !== 'all' && gender === 'both' && subtype === 'bestsellers') {
    filteredData = data.filter(
      (item) => item.isBestseller === true && item.type === type
    );
  } else if (type !== 'all' && subtype === 'bestsellers') {
    filteredData = data.filter(
      (item) =>
        item.isBestseller === true &&
        item.type === type &&
        item.category === gender
    );
  } else if (type === 'all' && gender === 'both' && subtype === 'bestsellers') {
    filteredData = data.filter((item) => item.isBestseller === true);
  } else if (type !== 'all' && gender === 'both' && subtype === 'sale') {
    filteredData = data.filter(
      (item) => item.isOnSale === true && item.type === type
    );
  } else if (type === 'all' && gender === 'both' && subtype === 'sale') {
    filteredData = data.filter((item) => item.isOnSale === true);
  } else if (type !== 'all' && gender === 'both' && subtype === 'collection') {
    filteredData = data.filter(
      (item) => item.isFromNewCollection === true && item.type === type
    );
  } else if (type === 'all' && gender === 'both' && subtype === 'collection') {
    filteredData = data.filter((item) => item.isFromNewCollection === true);
  } else if (type === 'all' && subtype === 'bestsellers') {
    filteredData = data.filter(
      (item) => item.isBestseller === true && item.category === gender
    );
  } else if (type !== 'all' && subtype === 'collection') {
    filteredData = data.filter(
      (item) =>
        item.isFromNewCollection === true &&
        item.type === type &&
        item.category === gender
    );
  } else if (type === 'all' && subtype === 'collection') {
    filteredData = data.filter(
      (item) => item.isFromNewCollection === true && item.category === gender
    );
  } else if (type !== 'all' && subtype === 'sale') {
    filteredData = data.filter(
      (item) =>
        item.isOnSale === true && item.type === type && item.category === gender
    );
  } else if (type === 'all' && subtype === 'sale') {
    filteredData = data.filter(
      (item) => item.isOnSale === true && item.category === gender
    );
  } else {
    filteredData = data.filter((item) => item.category === gender);
  }
  return (
    <main className='products'>
      <div className='products__header'>
        <h1>
          {gender +
            (subtype ? ' | ' + subtype : '') +
            ' | ' +
            type +
            ' | ' +
            filteredData.length +
            ' results'}
        </h1>
      </div>
      <div className='products__filters'>
        <div className='products__filter-wrapper'>
          <button
            className='products__btn'
            onClick={() => setIsShownType((prev) => !prev)}
          >
            Type <MdArrowDropDown />
          </button>
          {isShownType && (
            <ul className='products__btn-more'>
              <li>
                <Link
                  to={`/products/${gender}/all${subtype ? '/' + subtype : ''}`}
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to={`/products/${gender}/top${subtype ? '/' + subtype : ''}`}
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  to={`/products/${gender}/bottom${
                    subtype ? '/' + subtype : ''
                  }`}
                >
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  to={`/products/${gender}/full-body${
                    subtype ? '/' + subtype : ''
                  }`}
                >
                  Full Body
                </Link>
              </li>
              <li>
                <Link
                  to={`/products/${gender}/shoes${
                    subtype ? '/' + subtype : ''
                  }`}
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to={`/products/${gender}/accessories${
                    subtype ? '/' + subtype : ''
                  }`}
                >
                  Accessories
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {filteredData.length >= 1 ? (
        <div className='products__cards'>
          {' '}
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}{' '}
        </div>
      ) : (
        <h1 className='products__no-result'>No results</h1>
      )}
    </main>
  );
}

export default Products;
