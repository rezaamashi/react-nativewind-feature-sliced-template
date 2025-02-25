// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['expo', '@feature-sliced', 'plugin:tailwindcss/recommended'],
  ignorePatterns: ['/dist/*', '/*.config.js'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      }
    }
  },
  rules: {
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          // Allow internal imports within the same segment
          '**/app/{ui,styles,routes,analytics,api,config,lib,model}/*',
          '**/{pages,widgets,features,entities}/*/{ui,api,config,lib,model}/*',
          '**/shared/{ui,api,config,lib,model}/*',
        ],
      },
    ],
  }
};
