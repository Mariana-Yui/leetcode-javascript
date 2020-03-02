module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:jest/recommended'],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'no-var': 'error',
        // indent: [4, 'tab'],
        'linebreak-style': ['error', 'unix'],
        quotes: 0,
        semi: ['error', 'never'],
        eqeqeq: ['error', 'smart'],
        'no-eq-null': 0,
        'no-param-reassign': 0
    }
}
