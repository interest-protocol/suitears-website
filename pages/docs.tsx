import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';

const DocsPage: NextPage = () => (
  <Box
    as="iframe"
    width="100vw"
    height="100vh"
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    src="https://docs.interestprotocol.com/overview/sui-tears"
  />
);

export default DocsPage;
