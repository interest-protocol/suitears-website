import { ReactNode } from 'react';

export interface HowItWorksCardProps {
  number: number;
  description: string;
  isCentered?: boolean;
  icon: ReactNode;
  toRevert?: boolean;
}
