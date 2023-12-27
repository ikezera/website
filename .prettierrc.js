module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  printWidth: 100,
  arrowParens: 'avoid',
  tabWidth: 2,
  overrides: [
    {
      files: ['*NavigationStack.tsx', '**/routes.ts', '**/e2e/**'],
      options: { printWidth: 120 },
    },
  ],
};
