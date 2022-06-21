#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Node JS CLI', {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  )
}

const askQuestions = () => {
  const questions = [
    {
      name: 'FILENAME',
      type: 'input',
      message: 'What is the name of the file without extension?'
    },
    {
      type: 'list',
      name: 'EXTENSION',
      message: 'What is the file extension?',
      choices: ['.rb', '.js', '.php', '.css'],
      filter: function (val) {
        return val.split('.')[1]
      }
    },
    {
      type: 'number',
      name: 'NUM',
      message: 'Choose a number'
    }
  ]
  return inquirer.prompt(questions)
}

const success = () => {
  console.log(
    chalk.white.bgGreen.bold('Done!')
  )
}

const run = async () => {
  // show script introduction
  init()

  // ask questions
  const answers = await askQuestions()

  const { FILENAME, EXTENSION, NUM } = answers

  console.log('FILENAME:', FILENAME)
  console.log('EXTENSION:', EXTENSION)
  console.log('NUMBER', NUM, '\n')

  // show success message
  success()
}

run()
