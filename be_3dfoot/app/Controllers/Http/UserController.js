'use strict'
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
class UserController {
  async subscribe ({ request, response }) {
    const rules = {
      email: 'required|email|unique:users,email',
    }
    const data = request.only(['email'])

    const validation = await validate(data, rules)

    if (validation.fails()) {
      return JSON.stringify('E-mail already registered')
    }

    const user = await User.create(data)
    await Mail.send('emails.welcome', user.toJSON(), (message) => {
      message
      .to(user.email)
      .from('<from-email>')
      .subject('Welcome to yardstick')
    })

    return JSON.stringify('Registered successfully')
  }
}

module.exports = UserController
