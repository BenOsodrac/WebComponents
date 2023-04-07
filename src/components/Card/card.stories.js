import './card.js';

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
  text: 'Hello World!',
};

export const NoPadding = Template.bind({});
NoPadding.args = {
  text: 'Hello World!',
  padding: '0px',
};