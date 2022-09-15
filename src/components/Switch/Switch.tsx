import React from 'react';
import './Switch.scss';

export type SwitchProps = {
  label: string;
  align?: 'left' | 'right';
};

export const Switch = ({ label, align }: SwitchProps): JSX.Element => {
  return (
    <label htmlFor="switch-input" className="switch" aria-hidden="true">
      <input type="checkbox" id="switch-input" className="switch__checkbox" />

      {align === 'left' ? label : ''}
      <div className="switch__handle" hidden />
      {align === 'right' ? label : ''}
    </label>
  );
};

Switch.defaultProps = {
  align: 'right',
};
