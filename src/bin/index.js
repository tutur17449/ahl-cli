#! /usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const {
  getPath,
  createProjectContent,
  createProjectDirectory,
  directoryExists,
} = require('../lib/files');
const { askProjectSettings } = require('../lib/inquirer');

clear();

console.log(
  `${chalk.yellow(figlet.textSync('AHL-CLI', { horizontalLayout: 'full' }))}
  ${chalk.blue('🚀 setup your next TS project in few seconds')}
  `,
);

const cli = async () => {
  const { name, template } = await askProjectSettings();

  if (directoryExists(name)) {
    console.log(chalk.red('❌ Project already exist in directory !'));
    process.exit();
  }

  const { templatePath, projectPath } = getPath(name, template);

  createProjectDirectory(name);
  console.log(chalk.green('✅ Project directory create'));

  createProjectContent(templatePath, projectPath);
  console.log(chalk.green('✅ Project initialized'));
};

cli();
