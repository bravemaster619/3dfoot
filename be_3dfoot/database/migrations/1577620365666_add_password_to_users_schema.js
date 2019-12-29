'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPasswordToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('password', 254);
    })
  }

  down () {
    this.table('usres', (table) => {
      // reverse alternations
      table.dropColumn('password')
    })
  }
}

module.exports = AddPasswordToUsersSchema
