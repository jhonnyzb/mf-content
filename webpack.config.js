const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'Content',

  exposes: {
    './NewsListModule': './src/app/modules/content/news-list/news-list.module.ts',
    './MecanicaModule': './src/app/modules/content/mecanica/mecanica.module.ts',
    './WidgetsModule': './src/app/modules/content/widgets/widgets.module.ts',
    './FaqModule': './src/app/modules/content/faq/faq.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
