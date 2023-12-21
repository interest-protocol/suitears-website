import { FC } from 'react';

import Layout from '@/components/layout';

import { Benefits, Feature, Hero, Proven } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Benefits />
    <Proven />
    <Feature />
  </Layout>
);

export default Landing;
