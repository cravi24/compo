import React from 'react';
import './button.scss';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export function Button({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
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
