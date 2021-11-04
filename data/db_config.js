const knex = require('knex');

const configurations = require('../knexfile')

const enviornment = process.env.NODE_ENV

module.exports = knex(configurations[enviornment])