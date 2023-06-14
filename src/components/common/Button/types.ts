// Export type
export enum BUTTON_VARIANTS {
  CONTAINED = 'contained',
}

export type ButtonProps = {
  className?: string;
  variant?: BUTTON_VARIANTS;
  label: string;
  onClick?: () => void;

  [key: string]: any;
};
