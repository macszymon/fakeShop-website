import React from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import data from '../../data';
import './Search.css'

function Search() {
  const {value} = useParams()
  const results = data.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

  return (
    <section className='search'>
            {results.length >= 1 ? <div className="search__cards"> {results.map(item => <Card key={item.id} item={item} />)}  </div> : <h1 className='search__no-result'>No results</h1>}
    </section>
  )
}

export default Search