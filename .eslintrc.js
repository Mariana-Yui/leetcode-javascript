module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    extends: ['eslint:recommended', 'standard', 'plugin:jest/recommended'],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'no-var': 'error',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        eqeqeq: ['error', 'smart'],
        'no-eq-null': 0,
        'no-param-reassign': 0
    }
}
