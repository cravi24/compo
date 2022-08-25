import React from 'react';
import './Button.scss';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export function Button({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) {
  const mode = primary ? 'button__primary' : 'button__secondary';
  return (
    <button
      type="button"
      className={['button', `button__${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: () => {},
};
