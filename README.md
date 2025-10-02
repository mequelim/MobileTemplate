# Mobile Base

+ A Mobile application built with React Native CLI (0.81.4) and Node.js (22.20.0 LTS).
+ The project is structured to ensure scalability, code consistency, and developer productivity.

## Tech Stack

+ [TypeScript](https://www.typescriptlang.org/);
+ [React Native](https://reactnative.dev/) (CLI / 0.81.4);
+ [Node.js](https://nodejs.org/en) (LTS / 22.20.0 LTS);
+ [ESLint](https://eslint.org/) (linting);
+ [Jest](https://jestjs.io/) (tests).

### Libs

+ [React Navigation](https://reactnavigation.org/) [installed];
+ [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient) [installed];
+ [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) [installed];
+ [i18react](https://www.i18next.com/) [planned];
+ [Async Storage](https://react-native-async-storage.github.io/async-storage/) [not installed yet].

### Supporting Tools

#### Tests in React Native:

+ [Jest](https://playwright.dev/) [unit tests / installed];
+ [React Native Testing Library](https://testing-library.com/) [not installed yet];
+ [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) [not installed yet];
+ [Detox](https://wix.github.io/Detox/) [E2E tests / not installed yet].

## Getting Started

### Requirements

+ Node.js 22.20.0 (LTS);

  + npm or yarn;

    > **Note**: initially, `npm` was used in the project.

+ Java JDK 17+ (for Android builds);
+ Xcode (for iOS builds, macOS only);
+ CocoaPods (for iOS dependency management).

### Installation

1. Clone the project;

    a. [Repository](https://github.com/mequelim/MobileBase).

2. Install dependencies with `npm install` or `yarn install`;
3. Start the Metro bundler with `npm start` or `yarn start`;
4. Run the app on Android with `npm run android` or `yarn android`;
5. Run the app on iOS with `npm run ios` or `yarn ios`.

## Project Structure

```bash
src/
  components/ 
  utils/
    __tests__/
    constants/
    functions/
    regex/
    types/
  App.tsx
```

#### `./src/components`

#### Purpose

+ Contains reusable, isolated UI building blocks such as buttons, text elements, and inputs.

#### Best Practices

+ Components should be self-contained and stateless when possible;
+ Props must be typed via src/utils/types for consistency;
+ No business logic or API calls here;
+ Styles should be encapsulated in the component file;
+ Anti-patterns: avoid hard-coded strings. Do not import heavy logic or state management directly.

#### `./src/utils/constants`

#### Purpose

+ Global constants such as colors, spacing, environment variables, and API endpoints.

#### Best Practices

+ Use descriptive constant names such as PRIMARY_COLOR or DEFAULT_TIMEOUT;
+ Group constants by domain;
+ Keep values immutable;
+ Anti-patterns: do not store secrets here. Use `.env` files instead.

#### `./src/utils/functions`

#### Purpose

+ Centralized collection of reusable helper functions such as date formatters, validators, and converters.

#### Best Practices

+ Functions must be pure (no side-effects);
+ Unit tests should be placed in tests;
+ Functions should be framework-agnostic;
+ Anti-patterns: dp not include API logic or React dependencies here.

#### `./src/utils/regex`

#### Purpose

+ Reusable regex patterns for validation such as emails, phone numbers, passwords, etc.

#### Best Practices

+ Document what each regex validates;
+ Export regex as named constants;
+ Anti-patterns: do not inline regex in components.

#### `./src/utils/types`

#### Purpose

+ Centralized TypeScript types and component prop definitions.

#### Best Practices

+ Define Props interfaces here and import them in components;
+ Extend React Native props when needed (e.g., TouchableOpacityProps);
+ Anti-patterns: do not mix utility functions here. Avoid duplicate type definitions.

#### Example

```typescript
// button-props.ts
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  backgroundColor: string;
  disabled?: boolean;
  text: string;
  textColor?: string;
  width?: number;
};

export type { ButtonProps };
```

## ESLint

+ This project enforces strict ESLint rules to maintain clean, consistent, and type-safe code.

### Rules

+	`@typescript-eslint/explicit-module-boundary-types`: require explicit return types for exports.
+	`@typescript-eslint/explicit-function-return-type`: enforce explicit return type on all functions.
+	`@typescript-eslint/no-explicit-any`: disallow use of the “any” type.
+	`@typescript-eslint/no-unused-vars`: Disallow unused variables.
+	`@typescript-eslint/typedef`: Require type definitions for variables and parameters.
+	`array-bracket-spacing`: enforce spacing inside array brackets.
+	`comma-dangle`: disallow trailing commas.
+	`indent`: enforce 2-space indentation.
+	`key-spacing`: enforce consistent spacing in objects between keys and values.
+	`object-curly-spacing`: require spaces inside curly braces.
+	`quotes`: enforce double quotes for strings.
+	`react-native/no-inline-styles`: disabled for flexibility.
+	`react/no-unstable-nested-components`: disabled for nested component usage.
+	`semi`: require semicolons at the end of statements.

## Components notes

### `ButtonWithIconsAndText` (`./src/components/ButtonWithIconsAndText.tsx`)

#### How to use?

```typescript jsx
<ButtonWithIconAndText
  text="Home"
  iconName="home"
  iconSize={25}
  textColor="#fff"
  backgroundColor="#111827"
/>
```
