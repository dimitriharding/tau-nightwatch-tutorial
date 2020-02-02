module.exports = {
    src_folders: [ "tests" ],
  
    webdriver: {
      keep_alive: true
    },
  
    test_settings: {
      default: {
        launch_url: 'https://ultimateqa.com'
      },
  
      browserstack: {
        selenium: {
          host: 'hub-cloud.browserstack.com',
          port: 443
        },
  
        // More info on configuring capabilities can be found on:
        // https://www.browserstack.com/automate/capabilities?tag=selenium-4
        desiredCapabilities: {
          'bstack:options' : {
            local: 'false',
            userName: '${BROWSERSTACK_USER}',
            accessKey: '${BROWSERSTACK_KEY}',
          }
        }
      },
  
      'browserstack.chrome': {
        extends: 'browserstack',
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions : {
            w3c: false
          }
        }
      },
  
      'browserstack.firefox': {
        extends: 'browserstack',
        desiredCapabilities: {
          browserName: 'firefox'
        }
      },
  
      'browserstack.ie': {
        extends: 'browserstack',
        desiredCapabilities: {
          browserName: 'IE',
          browserVersion: '11.0',
          'bstack:options' : {
            os: 'Windows',
            osVersion: '10',
            local: 'false',
            seleniumVersion: '3.5.2',
            resolution: '1366x768'
          }
        }
      }
    }
  };