const fs = require('fs')

module.exports = {

    //Executed before selenium session is created
    before: (done) => {
        done();
    },

    //Executed after closing the selenium session
    after: (done) => {
       done();
    },

    beforeEach: (client, done) => {
        done()
    },

    afterEach: (client, done) => {
        done()
    },

    reporter: (results, done) => {
        fs.writeFile('testresults.json', JSON.stringify(results, null, '\t'), (err) => {
            if(err) throw err;

            //then the save is saved
            console.log('report saved');
            done();
        });
    }
}