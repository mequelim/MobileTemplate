# Mobile Base

## What is this application and what is it for?

`MobileTemplate` is a project designed and structured to be the backbone, the foundational layer, and the architectural skeleton upon which any mobile application developed by Atos can be built—with consistency, standardization, scalability, and speed.

This project was conceived as a standardized starting point for cross-platform mobile app development, using React Native and TypeScript as the main engine.

## The idea? It’s simple...

Avoid reinventing the wheel every time a new app is created or updated from scratch, eliminating the repetitive effort of configuration, dependency alignment, architectural standard definition, and creation of basic utility components.

## What to expect from the application?

At the heart of the project, we have:
  + **Minimal yet complete configuration**: a ready-to-go environment with all essential dependencies set up, allowing new projects to start without the pain of initial setup;
  + **Solid base architecture**: organized folders, modular structure, and clear conventions that simplify both maintenance and scalability;
  + **Reusable fundamental components**: buttons, typography, inputs, containers, loaders — implemented in a generic but extensible way, ready to adapt to any visual identity or project guideline;
  + **Integration with modern standards**: support for navigation, state management, static typing with TypeScript, linting and formatting best practices — ensuring consistency and code quality from the very first commit;
  + Designed extensibility: nothing here is an end in itself. MobileTemplate was built to be shaped, extended, and evolved according to the specific demands of each digital product.

### In essence

`MobileTemplate` serves as the ground zero of creation: a base application that reduces the initial entropy of every new project, accelerates development kickoff, and establishes a technical master guideline.

It is a foundation that frees the developer from the bureaucracy of setup and allows them to focus creative energy on what truly matters: business logic, user experience, and product differentiation.

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
+ [Async Storage](https://react-native-async-storage.github.io/async-storage/) [not installed yet];
+ [Testing Library](https://testing-library.com/) [not installed yet];
+ [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) [not installed yet];
+ [Detox](https://wix.github.io/Detox/) [E2E tests / not installed yet].

## Getting Started

### Requirements

+ Node.js 22.20.0 (LTS);

  + npm or yarn;

    > **Note**: initially, `npm` was used in the project.

+ Java JDK 17+ (for Android builds);

  > **Note:** to create the project, it was used JDK Java 21.0.8 (Temurin JDK)!

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

```shell
MobileTemplate/
  .bundle/
  android/
  assets/
  ios/
  node_modules/
  src/
    components/
    theme/
    utils/
    App.tsx
  vendor/
  .eslintrc.js
  .gitignore
  .prettierrc.js
  .watchmanconfig
  app.json
  babel.config.js
  Gemfile
  Gemfile.lock
  index.js
  jest.config.js
  links.md
  metro.config.js
  package.json
  package-lock.json
  react-native.config.js
  README.md
  tsconfig.json
```

### Folders

+ `.bundle/`: used by React Native and Metro bundler to store temporary build and cache files; 
+ `android/`: native Android project (Java/Kotlin + Gradle);
  - Required for builds and platform-specific customizations.
+ `assets/`: stores static resources such as images, fonts, icons, and files that need to be packaged into the app;
+ `ios/`: native iOS project (Swift/Objective-C + Xcode);
  - Required for builds and platform-specific customizations.
+ `node_modules/`: directory created by npm/yarn containing all project dependencies;
  - Should not be versioned.
+ `src/`: main directory for the application’s source code;
  - `components/`: reusable UI components such as buttons, inputs, and texts;
    * Should be decoupled and preferably stateless;
    * Props typed via `./src/utils/types`.
  - `theme/`: global style definitions such as color palette, spacing, and typography;
    * Centralizes the visual identity of the application.
  - `utils/`: helper functions, regex, types, and reusable constants;
    * `constants/`: global constants (colors, configs, endpoints);
    * `functions/`: pure and reusable functions;
    * `regex/`: documented and reusable regex patterns;
    * `types/`: centralized TypeScript definitions for types and props (used by components).
  - `App.tsx`: root component of the React Native application;
+ `vendor/`: optional folder for custom dependencies or third-party code not coming from npm/yarn.

### Files

+ `.eslintrc.js`: ESLint configuration to enforce code style and best practices;
+ `.gitignore`: defines files/folders ignored by Git (e.g., node_modules/, caches, credentials);
+ `.prettierrc.js`: Prettier configuration (automatic code formatting);
+ `.watchmanconfig`: Watchman configuration (tool that watches for file changes);
+ `app.json`: application configuration (name, version, icons, etc);
    - Used by React Native CLI.
+ `babel.config.js`: Babel configuration, responsible for transpiling modern code for compatibility;
+ `Gemfile`: list of Ruby dependencies (used in iOS, mainly for CocoaPods);
+ `Gemfile.lock`: exact versions of installed Ruby dependencies.
+ `index.js`: application entry point. Registers App.tsx in the native runtime;
+ `jest.config.js`: Jest testing framework configuration;
+ `links.md`: document with useful project links;
+ `metro.config.js`: Metro bundler configuration (official React Native packager);
+ `package.json`: main Node.js project file (scripts, dependencies, metadata);
+ `package-lock.json`: locks the exact versions of dependencies installed via npm;
+ `react-native.config.js`: advanced React Native CLI configuration (e.g., native library linking);
+ `README.md`: main project documentation;
+ `tsconfig.json`: TypeScript compiler configuration (paths, typing, strict mode, etc).

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
