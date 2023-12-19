import { FC } from 'react';

import Layout from '@/components/layout';

import Feature from './components/feature/index';
import { Benefits, Hero } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Feature />
    <Benefits />
  </Layout>
);

export default Landing;
