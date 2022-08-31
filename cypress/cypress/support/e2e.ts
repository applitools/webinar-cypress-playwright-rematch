import './custom_commands/login'
require('cypress-xpath')
const registerCypressGrep = require('cypress-grep')
registerCypressGrep()
import '@applitools/eyes-cypress/commands'
import '@cypress/code-coverage/support'