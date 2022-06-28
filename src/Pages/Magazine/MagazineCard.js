import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

function MagazineCard({post}) {
  return (
    <div className='magazine__post'>
      <p className='magazine__post-date'>{post.addedDate}</p>
    <img
      className='magazine__post-img'
      src={post.img}
      alt='friends talking'
    />
    <div className='magazine__post-text'>
      <h4 className='magazine__post-category'>{post.category}</h4>
      <h3 className='magazine__post-title'>{post.title}</h3>
      <Link className='magazine__post-read' to={'/magazine/post/'+post.id}>
        Read <BsArrowRight />
      </Link>
    </div>
  </div>
  )
}

export default MagazineCard