module.exports = {
  root: true,
  extends: ["eslint-config-apart", "plugin:storybook/recommended"],
  rules: {
    "import/no-extraneous-dependencies": ["error", {
      peerDependencies: true,
      devDependencies: true
    }]
  }
};