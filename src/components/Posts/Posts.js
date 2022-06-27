import React from 'react';
import './Posts.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import posts from '../../posts';

function Posts() {
  return (
    <section className='posts'>
      <h2 className='posts__header'>Magazine</h2>
      <h4 className='posts__subheader'>Featured posts</h4>
      <div className='posts__container'>
        <div className='post'>
          <img
            className='post__img'
            src={posts[1].img}
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>{posts[1].category}</h4>
            <h3 className='post__title'>{posts[1].title}</h3>
            <Link className='post__read' to={'magazine/post/'+posts[1].id}>
              Read <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className='post'>
          <img
            className='post__img'
            src={posts[5].img}
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>{posts[5].category}</h4>
            <h3 className='post__title'>{posts[5].title}</h3>
            <Link className='post__read' to={'magazine/post/'+posts[5].id}>
              Read <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className='post'>
          <img
            className='post__img'
            src={posts[2].img}
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>{posts[2].category}</h4>
            <h3 className='post__title'>{posts[2].title}</h3>
            <Link className='post__read' to={'magazine/post/'+posts[2].id}>
              Read <BsArrowRight />
            </Link>
          </div>
        </div>
        </div>
      <button className='posts__btn'><Link to='/magazine'>See more</Link></button>
    </section>
  );
}

export default Posts;
