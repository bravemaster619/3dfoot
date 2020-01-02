'use strict'
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
class EmailController {
    async store ({ request, response }) {
      const rules = {
        email: 'required|email|unique:users,email',
      }

      const data = request.only(['email'])

      console.log(data)

      const validation = await validate(data, rules)

      if (validation.fails()) {
        return JSON.stringify('E-mail already registered or invalid')
      }

      const user = await User.create(Object.assign({
        role: 'subscriber'
      }, data))
        await Mail.send('emails.welcome', user.toJSON(), (message) => {
          message
            .to(user.email)
            .from('<from-email>')
            .subject('Welcome to 3dfoot')
        })

        return JSON.stringify('Registered successfully')
      }
}

module.exports = EmailController
