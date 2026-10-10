import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['**/build', '**/dist', '**/node_modules', '**/data/*.json']
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['packages/*/src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: { ...globals.node }
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
        }
    },
    {
        files: ['packages/web/src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: { ...globals.browser }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs['recommended-latest'].rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
        }
    },
    prettier
);
