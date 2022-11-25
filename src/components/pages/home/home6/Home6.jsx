import React from 'react'
import Banner from '../../../common/banner/Banner';
import Hero from '../hero/Hero';
import RecentNew from './Home6RecentNew/RecentNew';
import SimpleCart from './Home6SimpleCart/SimpleCart';

export default function Home6() {
  return (
    <div>
      <Hero/>
      <SimpleCart/>
      <RecentNew/>
      <Banner/>

    </div>
  );
}
