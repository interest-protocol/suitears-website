import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import AuditCard from './audit-card';

const Proven: FC = () => (
  <Box
    as="section"
    display="flex"
    minWidth="100%"
    justifyContent="center"
    pt="10xl"
    px="xs"
  >
    <Box
      pb="11xl"
      gap="8xl"
      width="81rem"
      display="flex"
      maxWidth="96%"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        gap="m"
        display="flex"
        maxWidth="100%"
        width="39.75rem"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          size="medium"
          fontWeight="700"
          variant="display"
          fontFamily="Satoshi"
          lineHeight="3.25rem"
        >
          PROVEN
        </Typography>
        <Typography
          size="large"
          variant="body"
          fontWeight="500"
          color="onSurface"
          fontStyle="normal"
          textAlign="center"
          lineHeight="1.5rem"
          fontFamily="Satoshi"
        >
          {`Our team has a track record of successfully deploying and managing an
          Audited DEX on Sui's mainnet, as well as ranking highly on different
          Sui hackathons.`}
        </Typography>
      </Box>
      <AuditCard />
    </Box>
  </Box>
);

export default Proven;
