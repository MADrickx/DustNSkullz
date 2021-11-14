module.exports = {
    extends: "@becode",
    rules: {
        "unicorn/filename-case": [
            "error",
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        "arrow-parens": [0],
        "react/jsx-max-depth": 0,
        parser: "@babel/eslint-parser",
        parserOptions: {requireConfigFile: "false"},
        babelOptions: {configFile: "./.babelrc"},
    },
};
