import { FC } from 'react';

import Layout from '@/components/layout';

import { Benefits, Hero, Proven } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Benefits />
    <Proven />
  </Layout>
);

export default Landing;
