// config.js
const URLs = {
    development: 'https://dev.example.com/login',
    staging: 'https://staging.example.com/login',
    production: 'https://practice.expandtesting.com/login'
  };
  
  function getLoginUrl(env) {
    return URLs[env] || URLs.production; // Default to production if no match
  }

  module.exports = {
    getLoginUrl
  };
  