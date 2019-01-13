module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true
        }],
        "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
        "camelcase": 0,
        "no-underscore-dangle": 0,
        "react/prop-types": [2, { ignore: ['children', 'render'] }],
        "import/no-named-as-default": 0,
        "no-unused-expressions": [2, { "allowTaggedTemplates": true }],
    },
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true,
        "jest": true,
    }
}
