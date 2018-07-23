'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 255)
        .notNullable()
      table.string('slug', 266)
        .notNullable()
        .unique()
        .index()
      table.text('body', 'longtext')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostSchema
