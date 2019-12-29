'use strict'

const User = use('App/Models/User')
const Question = use('App/Models/Question')
const Answer = use('App/Models/Answer')

class AnswerController {

  async newAnswer({ request, auth, response }) {
    let user = null;
    try {
      user = await auth.getUser();
    } catch(error) {
      return JSON.stringify('You are not logged in')
    }
    if (user === null) {
      return JSON.stringify('You are not logged in')
    }
    let qid = request.input('question_id');
    const questionCount = await Question.query().where('id', '=', qid).count()
    if (questionCount < 1) {
      return JSON.stringify('No such question')
    }
    const rule = {
      title: 'max:254',
      content: 'max:65534'
    }
    const data = request.only(['question_id', 'title', 'content'])
    const validation = await validate(data, rule)
    if (validation.fails()) {
      return JSON.stringify(validation.message())
    }
    let answer = await Answer.create(data)
    answer.user_id = user.id
    await answer.save()
    return response.json(answer)
  }

}

module.exports = AnswerController
