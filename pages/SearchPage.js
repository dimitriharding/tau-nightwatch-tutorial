const elements = {
    postTitle: '#post-6917 h2'
};

const commands = [
    
];

module.exports = {
   elements: elements,
   commands: commands,
   url: function() {
       return `${this.api.launchUrl}/?s`
   }
}