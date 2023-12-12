import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowRight, MoveBit } from '@/components/svg';

const Proven: FC = () => {
  return (
    <Box
      as="section"
      display="flex"
      minWidth="100%"
      justifyContent="center"
      padding="6rem 0.5rem 0rem 0.5rem"
    >
      <Box
        gap="4rem"
        width="81rem"
        display="flex"
        maxWidth="96%"
        alignItems="center"
        paddingBottom="8rem"
        flexDirection="column"
      >
        <Box
          gap="1rem"
          display="flex"
          maxWidth="100%"
          width="39.75rem"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            size="small"
            variant="title"
            fontFamily="Satoshi"
            lineHeight="3.25rem"
            fontSize="2.8125rem"
          >
            PROVEN
          </Typography>
          <Typography
            size="small"
            variant="body"
            fontSize="1rem"
            fontWeight="500"
            textAlign="center"
            fontStyle="normal"
            lineHeight="1.5rem"
          >
            {`Our team has a track record of successfully deploying and managing
            an Audited DEX on Sui's mainnet, as well as ranking highly on
            different Sui hackathons.`}
          </Typography>
        </Box>
        <Box
          display="flex"
          maxWidth="100%"
          padding="2.5rem"
          width="44.25rem"
          alignItems={['center', 'center', 'flex-start']}
          borderRadius="2rem"
          border="0.063rem solid #FFF"
          justifyContent="space-between"
          height={['26.625rem', '26.625rem', 'auto']}
          flexDirection={['column', 'column', 'row']}
          background="linear-gradient(36deg, #FFF 2.01%, rgba(255, 255, 255, 0.16) 98.41%)"
        >
          <Box
            display="flex"
            width="7.875rem"
            height="7.875rem"
            alignItems="center"
            justifyContent="center"
            padding="2.125rem 1.4375rem 2.08619rem 1.4375rem"
          >
            <MoveBit maxWidth="5rem" maxHeight="5rem" />
          </Box>
          <Box
            gap="1rem"
            display="inline-flex"
            width="21.4375rem"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Typography
              size="small"
              variant="body"
              fontSize="1rem"
              fontWeight="500"
              textAlign={['center', 'start']}
              fontStyle="normal"
              lineHeight="1.5rem"
              color="#000000B8"
            >
              MOVEBIT, a third-party blockchain security company focused on Move
              ecosystem security which helped us keep our protocol secured.
            </Typography>
            <Box minWidth="9.75rem">
              <Button
                variant="outline"
                SuffixIcon={
                  <ArrowRight maxHeight="1.125rem" maxWidth="1.125rem" />
                }
                width="100%"
                borderRadius="0.5rem"
                border="0.063rem solid #C6C6CA"
                padding="0.625rem 1rem 0.625rem 1.5rem"
              >
                <Typography
                  size="small"
                  variant="body"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                >
                  Read Audit
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Button
              fontSize="0.875rem"
              variant="outline"
              padding="0.25rem 0.625rem"
            >
              Audited
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Proven;
