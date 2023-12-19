import { ReactNode } from 'react';

export interface FeatureCardProps {
  number: number;
  description: string;
  isCentered?: boolean;
  icon: ReactNode;
  toRevert?: boolean;
}
