import React from 'react';
import './Posts.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Posts() {
  return (
    <section className='posts'>
      <h2 className='posts__header'>Magazine</h2>
      <h4 className='posts__subheader'>Featured posts</h4>
      <div className='posts__container'>
        <div className='post'>
          <img
            className='post__img'
            src='https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>Health</h4>
            <h3 className='post__title'>Lorem ipsum consectetur</h3>
            <Link className='post__read' to='magazine/post/1'>
              Read <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className='post'>
          <img
            className='post__img'
            src='https://images.unsplash.com/photo-1542105726-7982ea78fb59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>Family</h4>
            <h3 className='post__title'>Lorem ipsum dolor sit</h3>
            <Link className='post__read' to='magazine/post/1'>
              Read <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className='post'>
          <img
            className='post__img'
            src='https://images.unsplash.com/photo-1632312045004-494c905db7d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='friends talking'
          />
          <div className='post__text'>
            <h4 className='post__category'>Social life</h4>
            <h3 className='post__title'>Magni lorem, beatae?</h3>
            <Link className='post__read' to='magazine/post/1'>
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
