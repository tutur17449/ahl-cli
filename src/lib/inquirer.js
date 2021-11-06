const inquirer = require('inquirer');

module.exports = {
  askProjectSettings: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter your project name:',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Please enter your project name.';
        },
      },
      {
        name: 'template',
        type: 'list',
        message: 'Select project template:',
        choices: [
          'react-ts-starter',
          'next-ts-starter',
          'node-ts-starter',
          'node-ts-rest-pg',
          'node-ts-rest-mongo',
          'node-ts-gql-pg',
          'node-ts-gql-mongo',
        ],
      },
    ];

    return inquirer.prompt(questions);
  },
};
