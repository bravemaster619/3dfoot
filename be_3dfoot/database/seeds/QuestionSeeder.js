'use strict'

/*
|--------------------------------------------------------------------------
| QuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Question = use('App/Models/Question')

class QuestionSeeder {
  async run () {
    let question = new Question
    question.title = 'Test Title';
    question.content = 'Lorem ipsum dolor sit amet...';
    await question.save()
  }
}

module.exports = QuestionSeeder
