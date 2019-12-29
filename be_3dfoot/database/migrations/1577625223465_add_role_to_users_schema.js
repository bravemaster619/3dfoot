'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRoleToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('role', 254)
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('role')
    })
  }
}

module.exports = AddRoleToUsersSchema
