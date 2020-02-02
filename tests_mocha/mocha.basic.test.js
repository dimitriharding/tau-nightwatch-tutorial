describe("Mocha Suite", () => {
    it('Confirm Page Title', (client)=> {
         client.url('https://ultimateqa.com/filling-out-forms/')
         .waitForElementVisible('body')
         .assert.title('Filling Out Forms - Ultimate QA');
    });
});