module.exports = {
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true,
        }
    },

    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "semi": [
            "error",
            "always"
        ]
    }
};
