import React from 'react';
import './Switch.scss';

export type SwitchProps = {
  label: string;
  align?: 'left' | 'right';
};

export const Switch = ({ label, align }: SwitchProps): JSX.Element => {
  return (
    <label htmlFor="switch-input" className="switch">
      <input type="checkbox" id="switch-input" className="switch--checkbox" />

      {align === 'left' ? label : ''}
      <div className="switch--handle" />
      {align === 'right' ? label : ''}
    </label>
  );
};

Switch.defaultProps = {
  align: 'right',
};
