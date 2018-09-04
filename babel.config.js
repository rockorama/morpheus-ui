module.exports = function(api) {
  return api.env('test')
    ? {
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
              modules: 'commonjs',
            },
          ],
          '@babel/preset-flow',
          '@babel/preset-react',
        ],
      }
    : {}
}
