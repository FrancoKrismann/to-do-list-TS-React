module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json',"./tsconfig.strictNullChecks.json"],
    tsconfigRootDir: __dirname,
    
   },
  plugins: ['react-refresh',"strict-null-checks"],
  rules: {
    "strict-null-checks/all": "warn",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types":"off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

}
