import { FC } from 'react';

import Layout from '@/components/layout';

import { Benefits, Hero } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Benefits />
  </Layout>
);

export default Landing;
