'use strict'
const { validate } = use('Validator')
const punycode = require('punycode')
const Mail = use('Mail')
const Contact = use('App/Models/Contact')
const Antl = use('Antl')
const Env = use('Env')
class ContactController {

  async store({ request, response }) {
    const locale = request.input('locale') === 'ch' ? 'ch' : 'en'

    const rules = {
      email: 'required|email',
      content: 'required|max:9999'
    }

    let data = request.only(['email', 'content'])

    const validation = await validate(data, rules)

    if (validation.fails()) {
      const errors = validation.messages()
      for (let i=0; i<errors.length; i++) {
        if (errors[i].field === "email") {
          return JSON.stringify(Antl.forLocale(locale).formatMessage("contacts.email_invalid"))
        }
        if (errors[i].field === "content") {
          return JSON.stringify(Antl.forLocale(locale).formatMessage("contacts.content_empty"))
        }
      }
    }

    data['email'] = punycode.toUnicode(data['email'])

    const contact = await Contact.create(data)

    const mail = await Mail.send(`emails.contact_${locale}`, contact.toJSON(), (message) => {
      message
        .to(data['email'])
        .from('<from-email>')
        .subject(Antl.forLocale(locale).formatMessage("contacts.email_subject"))
    })
    const admin_email = Env.get('ADMIN_EMAIL')
    if (admin_email) {
      try {
        await Mail.send('emails.admin.contact', contact.toJSON(), (message) => {
          message
            .to(Env.get('ADMIN_EMAIL'))
            .from('<from-email>')
            .subject('You just received a message')
        })
      } catch(e ) {
        console.warn('Please set admin email')
        console.log(e)
      }
    }


    return JSON.stringify(Antl.forLocale(locale).formatMessage("contacts.email_sent"))

  }

}

module.exports = ContactController
