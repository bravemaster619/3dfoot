'use strict'
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
const punycode = require('punycode')
const Antl = use('Antl')
class EmailController {
    async store ({ request, response }) {
      const locale = request.input('locale') === 'ch' ? 'ch' : 'en';
      Antl.switchLo
      const rules = {
        email: 'required|email|unique:users,email',
      }

      let data =request.only(['email'])

      data['email'] = punycode.toUnicode(data['email'])

      const validation = await validate(data, rules)



      if (validation.fails()) {
        return JSON.stringify(Antl.forLocale(locale).formatMessage("register.email_invalid"))
      }

      const user = await User.create(Object.assign({
        role: 'subscriber'
      }, data))
        await Mail.send(`emails.welcome_${locale}`, user.toJSON(), (message) => {
          message
            .to(user.email)
            .from('<from-email>')
            .subject(Antl.forLocale(locale).formatMessage("register.success_mail_subject"))
        })

        return JSON.stringify(Antl.forLocale(locale).formatMessage('register.success'))
      }
}

module.exports = EmailController
