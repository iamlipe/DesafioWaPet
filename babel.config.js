module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@/__mocks__': './__mocks__',
          '@/__tests__': './__tests__',
        },
        extensions: ['.ios.js', '.android.js', '.json', '.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
