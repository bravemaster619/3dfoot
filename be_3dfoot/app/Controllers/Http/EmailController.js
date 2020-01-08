'use strict'
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
const punycode = require('punycode')
class EmailController {
    async store ({ request, response }) {
      const rules = {
        email: 'required|email|unique:users,email',
      }

      let data =request.only(['email'])

      data['email'] = punycode.toUnicode(data['email'])

      console.log(data)

      const validation = await validate(data, rules)

      if (validation.fails()) {
        return JSON.stringify('E-mail already registered or invalid')
      }
      console.log(request)
      const locale = request.input('locale') === 'ch' ? 'ch' : 'en';
      const user = await User.create(Object.assign({
        role: 'subscriber'
      }, data))
        await Mail.send(`emails.welcome_${locale}`, user.toJSON(), (message) => {
          message
            .to(user.email)
            .from('<from-email>')
            .subject('Welcome to 3dfoot')
        })

        return JSON.stringify('Registered successfully')
      }
}

module.exports = EmailController
