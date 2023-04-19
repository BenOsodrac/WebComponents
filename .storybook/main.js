module.exports = {
  "stories": ['../src/stories/Welcome.stories.mdx', "../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", '@storybook/addon-a11y', "@storybook/addon-mdx-gfm", '@storybook/addon-interactions'],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  }
};
