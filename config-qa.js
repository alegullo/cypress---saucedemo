const {defineConfig} = require('cypress')
const baseConfig = require('./cypress.config.js')

const e2e = {
    baseUrl: 'http://qa.saucedemo.com/',
    env: {
        username: 'QA_sauce',
        password: 'QA_secret'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})