// THIS ONLY EFFECTS THE EDITOR
// FOR CONSOLE LOOK IN THE PACKAGE.JSON

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    plugins: ["@typescript-eslint"],
    env: {
        browser: true, // browser global variables
        jest: true, // Jest global variables
        es2020: true, // adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11
        commonjs: true, // use this for browser-only code that uses Browserify/WebPack
        node: true, // use this for node global variables as they are used in the webpack config
    },
    extends: [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "prettier",
        "plugin:prettier/recommended",
    ],
    rules: {
        "eol-last": ["error", "always"],
        "no-lonely-if": "error",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        "jsx-quotes": ["error", "prefer-double"],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "no-extra-boolean-cast": "off",
        indent: "off",
        "no-trailing-spaces": [
            "error",
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],
        "comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-namespace": [
            "error",
            { allowDeclarations: true },
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowTypedFunctionExpressions: true,
                allowExpressions: false,
            },
        ],
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            },
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false,
                },
                singleline: {
                    delimiter: "comma",
                    requireLast: false,
                },
            },
        ],
    },
}
