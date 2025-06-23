// babel.config.js

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@utils': './src/utils',
            '@types': './src/types',
            '@constants': './src/constants',
          },
        },
      ],
    ],
  }
}
