
# Playwright & TypeScript Demo

A simple but powerfull Playwright Demo


## Authors

- [@cavem3n](https://www.github.com/cavem3n)


## Appendix

This automation framework provides real-world exercises on using Playwright for learning purposes, covering login flows, assertions, purchase flows, checkout, API, and various exercises involving web components such as forms, dropdown menus, buttons, file uploads, and reading data from .csv files. $${\color{orange}The  \space data  \space used \space was \space randomly \space generated \space and \space is \space fictional \space for  \space testing  \space purposes.}$$


## Documentation

[Playwright](https://playwright.dev/docs/intro),
[Allure Reports](https://allurereport.org/docs/),
[TypeScript](https://www.typescriptlang.org/docs/),
[CSV-Parse](https://csv.js.org/parse/)

## Installation

To install dependencies run the following command

```bash
npm install
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/cavem3n/pw.git
```

Go to the project directory

```bash
  cd pw
```

Install dependencies

```bash
  npm install
```

Start tests and generate report

```bash
  npm run clean-results && npm run run-test & npm run generate-report
```

See Allure Report

```bash
  allure serve
```


## Lessons Learned

- Page Object Model.
- CSV Sync loading & Test Data-driven.
- Execute CI Tests in GitHub Actions.
- Generate Allure Report and upload to GitHub Pages.


## License

MIT License

Copyright (c) [2026] [cavem3n]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
