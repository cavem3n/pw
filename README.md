
# Playwright & TypeScript Demo

A simple but powerfull Playwright Demo


## Authors

- [@cavem3n](https://www.github.com/cavem3n)


## Appendix

This automation framework provides real-world exercises on using Playwright for learning purposes, covering login flows, assertions, purchase flows, checkout, API, and various exercises involving web components such as forms, dropdown menus, buttons, file uploads, and reading data from .csv files. $${\color{orange}The  \space data  \space used \space was \space randomly \space generated \space and \space is \space fictional \space for  \space testing  \space purposes.}$$


## Documentation

[Playwright](https://playwright.dev/docs/intro)\
[Allure Reports](https://allurereport.org/docs/)\
[TypeScript](https://www.typescriptlang.org/docs/)\
[CSV-Parse](https://csv.js.org/parse/)\
[dotenv](https://www.npmjs.com/package/dotenv)\
[ReqRes](https://reqres.in/blog/free-api-for-testing)

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
  npm run clean-results && npm run run-test && npm run generate-report
```

See Allure Report

```bash
  allure serve
```


## Generated Report Demo

https://cavem3n.github.io/pw/


## Lessons Learned

- Page Object Model.
- CSV Sync loading & Test Data-driven.
- Execute CI Tests in GitHub Actions.
- Generate Allure Report and upload to GitHub Pages.
- API Testing and .env / GitHub Secrets management.


## License

MIT License
