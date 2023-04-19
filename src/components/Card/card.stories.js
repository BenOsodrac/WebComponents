import '../../../dist/outsystemsui.js';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Patterns/Atoms/Card',
  argTypes: {
    text: { control: 'text' },
    padding: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

const Template = ({ text, padding, backgroundColor }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<osui-card></osui-card>`;
  return `<osui-card background=${backgroundColor} padding=${padding}>${text}</osui-card>`
};

export const Basic = Template.bind({});
Basic.args = {
  padding: 'var(--space-base)',
  text: 'Hello World!',
};

// Basic functional click test
Basic.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const card = await canvas.findByText(args.text);
  await userEvent.click(card);
  expect(card.textContent).toContain("clicked");
};

export const NoPadding = Template.bind({});
NoPadding.args = {
  text: 'Hello World!',
  padding: '0px',
};


