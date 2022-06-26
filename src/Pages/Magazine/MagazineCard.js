import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

function MagazineCard({post}) {
  return (
    <div className='post'>
      <p className='post__date'>16 June 2022</p>
    <img
      className='post__img'
      src={post.img}
      alt='friends talking'
    />
    <div className='post__text'>
      <h4 className='post__category'>{post.category}</h4>
      <h3 className='post__title'>{post.title}</h3>
      <Link className='post__read' to='magazine/post/1'>
        Read <BsArrowRight />
      </Link>
    </div>
  </div>
  )
}

export default MagazineCard