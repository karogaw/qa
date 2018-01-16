{
  "output": "./e2e/codecept/output",
  "helpers": {
    "WebDriverIO": {
      "url": "http://testapp.com/",
      "windowSize": "maximize",
      "browser": [
        "chrome",
        "firefox"
      ]
    },
    "Mailbox": {
      "require": "node_modules/codeceptjs-tempmail"
    }
  },

  "include": {
    "I": "./e2e/codecept/steps_file.js",
    "loginPage": "./pages/Login.js"
  },
  "bootstrap": false,
  "teardown": null,
  "hooks": [],
  "tests": "./e2e/codecept/*.js",
  "name": "codecept",
  "multiple": {
    "basic": {
      "browsers": [
        "chrome",
        "firefox"
      ]
    }
  }
}
