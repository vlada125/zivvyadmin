// Dependencies
import { ChangeEvent, ReactNode } from 'react';

// Export type
export type TextInputProps = {
  className?: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
  after?: ReactNode;

  [key: string]: any;
}
