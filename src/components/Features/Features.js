import React from 'react';
import './Features.css';
import FeaturesCard from './FeaturesCard';
import { BsCheck2Circle, BsTruck } from 'react-icons/bs';
import { VscPackage } from 'react-icons/vsc';
import { TbSeeding } from 'react-icons/tb';

function Features() {
  return (
    <section className='features'>
      <h2 className='features__header'>Customers on the first place</h2>
      <div className='features__cards'>
        <FeaturesCard
          icon={<BsTruck className='features-card__icon' size={24} />}
          title='Fast delivery'
        />
        <FeaturesCard
          icon={<VscPackage className='features-card__icon' size={24} />}
          title='Easy return'
        />
        <FeaturesCard
          icon={<BsCheck2Circle className='features-card__icon' size={24} />}
          title='Quality products'
        />
        <FeaturesCard
          icon={<TbSeeding className='features-card__icon' size={24} />}
          title='Recycled packaging'
        />
      </div>
    </section>
  );
}

export default Features;
