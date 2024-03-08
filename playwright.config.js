// playwright.config.js
module.exports = {
    testDir: './tests', // Directory where your tests are located
    /* Use to specify browsers you want to run tests in */
    projects: [
      {
        name: 'Chromium',
        use: { browserName: 'chromium', headless: true },
      },
      {
        name: 'Firefox',
        use: { browserName: 'firefox' },
      },
      {
        name: 'WebKit',
        use: { browserName: 'webkit' },
      },
    ],
    reporter: [
      ['html', { outputFolder: 'playwright-report' }], // For HTML report
      ['json', { outputFile: 'reports/test-results.json' }] // For JSON report, specifying the output path
    ],
    //reporter: [['html'], ['json']],
    // Add other global configuration options here
  };
  