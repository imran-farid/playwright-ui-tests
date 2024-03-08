# playwright-ui-tests
ui test automation using Playwright + Java Script

## Pre requesite
 ```
* install npm pacakge in the local machine

```
## Installation
 ```
* git clone git@github.com:imran-farid/playwright-ui-tests.git

* cd playwright-ui-tests

#INSTALL ALL DEPENDENCIES,
npm install

```

## Run Tests from pre-defined scripts
 ```
npm run test-production-safari

npm run test-production-firefox

npm run test-production-chromium

```

# Run Tests by passing manual arugments
 ```

#RUN TESTS(HEADLESS MODE, TEST_ENV = development, staging, production )

TEST_ENV=production npx playwright test --project=Chromium

TEST_ENV=production npx playwright test --project=Firefox

TEST_ENV=production npx playwright test --project=WebKit

#RUN TESTS (HEAD MODE, TEST_ENV = development, staging, production)

TEST_ENV=production npx playwright test --project=Chromium  --headed

TEST_ENV=production npx playwright test --project=Firefox --headed

TEST_ENV=production npx playwright test --project=WebKit --headed

#RUN TESTS IN WINDOWS

Set TEST_ENV=production npx playwright test --project=Chromium

```


# Generate html report
 ```
#OPEN html Report
npx playwright show-report
```



