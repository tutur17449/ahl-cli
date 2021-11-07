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
          'node-ts-gql-pg-starter',
          // 'node-ts-rest-pg-starter',
          // 'node-ts-rest-mongo-starter',
          // 'node-ts-gql-mongo-starter',
        ],
      },
    ];

    return inquirer.prompt(questions);
  },
};
