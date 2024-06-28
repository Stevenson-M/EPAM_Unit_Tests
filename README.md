# Unit Testing Project

## Overview
This project is focused on implementing unit tests in JavaScript using Mocha, Chai, and Mochawesome for reporting. The code coverage is measured using `c8`. The project ensures that all methods are covered with unit tests.

## Prerequisites
- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Setup
1. Clone the repository:
    ```sh
    git clone "https://github.com/Stevenson-M/EPAM_Unit_Tests.git"
    cd unit_tests
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Project Structure
```plaintext
unit_tests/
├── app/
│   └── numbers_validator.js
├── test/
│   └── NumbersValidator.spec.js
├── .eslintrc.js
├── .gitignore
├── package.json
└── README.md
```

## Usage

### Running Tests
To run the tests:
  ```
npm test
  ```
### Running Tests with Coverage
To run the tests with code coverage using c8:
  ```
npm run coverage
  ```
### Running ESLint
To lint the code and automatically fix issues:
  ```
npm run lint
  ```

### Generating Test Reports
To generate test reports using Mochawesome:

Make sure Mochawesome is configured as a reporter in the mocha options.
  ```
npm test
  ```


## Author

Jinson Stevenson Moreno Aguilar - jinson.moreno@gmail.com
