module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@asset': './assets', 
          '~': './src',
          '@components': './src/components/*',
          '@screens': './src/screens/*',
          '@navigation': './src/navigation/*',

        },
      },
    ],
  ],
};
