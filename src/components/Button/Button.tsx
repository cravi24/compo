import React from 'react';
import './Button.scss';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  disabled = false,
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={['button', `button__${size}`, `button__${variant}`].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}
