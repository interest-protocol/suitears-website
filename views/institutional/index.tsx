import { FC } from 'react';

import Layout from '@/components/layout';

import { Hero } from './components';
import Feature from './components/feature/index';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Feature />
  </Layout>
);

export default Landing;
