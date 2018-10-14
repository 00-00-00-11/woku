const prefix = require("./config.json").prefix;

module.exports = {
    commandIs: (message, commandName) => {
        return (!message.author.bot && message.content.toLowerCase().startsWith(prefix.toLowerCase() + commandName.toLowerCase()))
    }   
}