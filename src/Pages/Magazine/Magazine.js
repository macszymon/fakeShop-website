import React from 'react';
import MagazineCard from './MagazineCard';
import posts from '../../posts';
import './Magazine.css';

function Magazine() {
  return (
    <main className='magazine'>
      <h1 className='magazine__header'>Magazine</h1>
      <div className='magazine__posts'>
        {posts.map((item) => (
          <MagazineCard key={item.id} post={item} />
        ))}
      </div>
    </main>
  );
}

export default Magazine;
