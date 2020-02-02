module.exports = {
      "Interacting with Elements Demo": (browser) => {
            browser
            .url('https://ultimateqa.com/filling-out-forms/')
            .waitForElementVisible('button[name="et_builder_submit_button"]:nth-child(1)')
            .moveToElement('button[name="et_builder_submit_button"]:nth-child(1)', 10, 10)
            .pause(2000)
      }
};