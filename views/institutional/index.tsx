import { FC } from 'react';

import Layout from '@/components/layout';

import { Benefits, Feature, Hero } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Feature />
    <Benefits />
  </Layout>
);

export default Landing;
