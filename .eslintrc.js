module.exports = {
  root: true,
  env: {
    jest: true
  },
  extends: [ "@react-native" ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    // "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/typedef": "error",
    "array-bracket-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", "never" ],
    "indent": [ "error", 2 ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
      }
    ],
    "object-curly-spacing": [ "error", "always" ],
    "quotes": [ "error", "double" ],
    "react-native/no-inline-styles": "off",
    "react/no-unstable-nested-components": "off",
    "semi": [ "error", "always" ]
  }
};