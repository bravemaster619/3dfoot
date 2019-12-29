'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.string('title', 254)
      table.text('content')
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
