import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonVariant } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonsTemplate: ComponentStory<typeof Button> = (args): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Object.values(ButtonVariant).map((variant) => (
        <div key={variant}>
          {Object.values(ButtonSize).map((size) => (
            <Button {...args} size={size} variant={variant} key={size} />
          ))}

          <Button {...args} size={ButtonSize.Small} variant={variant} disabled />
        </div>
      ))}
    </div>
  );
};
export const Buttons = ButtonsTemplate.bind({});
Buttons.args = {
  label: 'Button',
};

const Template: ComponentStory<typeof Button> = (args): JSX.Element => <Button {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.Secondary,
  label: 'Button',
};
