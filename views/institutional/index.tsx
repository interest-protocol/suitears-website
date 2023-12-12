import { FC } from 'react';

import Layout from '@/components/layout';

import { Hero, Proven } from './components';

const Landing: FC = () => (
  <Layout>
    <Hero />
    <Proven />
  </Layout>
);

export default Landing;
