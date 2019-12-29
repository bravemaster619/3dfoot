'use strict'

const User = use('App/Models/User')

class UserController {

  async export2Excel( { request, response } ) {
    const users = await User.all()
    console.log(users)
    return users
  }

}

module.exports = UserController
