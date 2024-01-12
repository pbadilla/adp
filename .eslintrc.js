module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest/globals": true,
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true,
                "jest": true,
            },
            "files": [
                "**/*.test.js"
            ],
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2022
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
        "node",
        "jest",
    ],
    "globals": {
        "process": true
    }
};
