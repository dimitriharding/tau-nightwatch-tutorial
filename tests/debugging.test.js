module.exports = {
        "Should find results when searching for 'applitools'": (client) => {
            const ComplicatedPage = client.page.ComplicatedPage();
            const SearchPage = client.page.SearchPage();

            ComplicatedPage
                .navigate()
                .search('applitools')
                .verify.urlContains('/?s')

            SearchPage
                .getText('@postTitle', (result) => {
                    //client.pause()
                    client.assert.equal(result.value, 'Applitools Bugs and Test Steps')
                });
        }
};