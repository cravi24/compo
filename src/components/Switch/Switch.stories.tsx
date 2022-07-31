import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  args: { ...Switch.defaultProps },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args): JSX.Element => <Switch {...args} />;

export const LeftSwitch = Template.bind({});
LeftSwitch.args = {
  label: 'label',
  align: 'left',
};

export const RightSwitch = Template.bind({});
RightSwitch.args = {
  label: 'label',
};
