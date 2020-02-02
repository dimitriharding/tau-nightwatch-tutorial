module.exports = {
    'demo Test': function (browser) {
        browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('button[name="et_builder_submit_button"]', 'Submit button is visible')
    }
}