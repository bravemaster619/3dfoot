'use strict'
const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
class AuthController {
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
      .subject('Welcome to 3dfoot')
    })

    return JSON.stringify('Registered successfully')
  }

  async signup({ request, auth, response }) {
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required'
    }
    const data = request.only(['email', 'password'])
    const validation = await validate(data, rules)
    if (validation.fails()) {
      return JSON.stringify(validation.message())
    }
    let user = await User.create(Object.assign({
      role: 'subscriber'
    }, data))
    let token = await auth.generate(user)

    user.password = undefined
    Object.assign(user, token)
    return response.json(user)
  }

  async login({request, auth, response}) {

    let {email, password} = request.all();

    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let token = await auth.generate(user)
        user.password = undefined
        Object.assign(user, token)
        return response.json(user)
      }
    } catch(e) {
      console.log(e)
      return JSON.stringify('You are not registered!')
    }
  }

}

module.exports = AuthController
