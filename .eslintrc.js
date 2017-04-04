module.exports = {
    env: {
        browser: true,
        amd: true,
        commonjs: true,
        es6: true,
        node: true
    },
    ecmaFeatures: {
        modules: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    /*
     0 - The rule has been disabled.
     1 - The rule emits a warning.
     2 - The rule emits an error.
     */
    rules: {
        'comma-dangle': 1,
        'indent': [1, 2, {"SwitchCase": 1}],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 1,
        'no-extra-semi': 1,
        'no-unreachable': 1,
        'no-undef': 1
    }
};
