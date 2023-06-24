module.exports = {
  root: true,
  extends: ["eslint-config-apart"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        peerDependencies: true,
        devDependencies: true,
      },
    ],
  },
};
