'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Hash = use('Hash')
const Factory = use('Factory')
const User = use('App/Models/User')
class UserSeeder {
  async run () {
    await User.create({
      email: 'admin@dev.com',
      password: '11111111', // password 11111111,
      role: 'admin'
    })
  }
}

module.exports = UserSeeder
