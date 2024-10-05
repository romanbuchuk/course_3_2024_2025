// https://eslint.org/docs/latest/use/command-line-interface

const config = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react */
        'plugin:react/recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react-hooks */
        'plugin:react-hooks/recommended',
        /*https://www.npmjs.com/package/eslint-plugin-import*/
        'plugin:import/errors',
        'plugin:import/warnings',
        /*https://www.npmjs.com/package/eslint-plugin-unicorn*/
        'plugin:unicorn/recommended',
        /*https://www.npmjs.com/package/eslint-plugin-cypress*/
        /*'plugin:cypress/recommended',*/
    ],
    /* https://github.com/import-js/eslint-plugin-import */
    settings: {
        react: {
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
            webpack: {
                // if not set, import won't work properly with aliases f.e. import Header from '@components/Header'
                config: './config/webpack.dev.config.js',
            },
        },
    },
    plugins: ['simple-import-sort', 'react'],
    ignorePatterns: ['node_modules', '.eslintrc.js'],
};

module.exports = config;
