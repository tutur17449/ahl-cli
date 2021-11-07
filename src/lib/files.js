const fs = require('fs');
const path = require('path');

const excludesDirFile = ['node_modules', 'data', 'mongo-data', 'pgadmin4'];

const files = {
  directoryExists: filePath => {
    return fs.existsSync(filePath);
  },

  getPath: (name, template) => {
    return {
      templatePath: path.join(__dirname, '..', '..', 'templates', template),
      projectPath: path.join(process.cwd(), name),
    };
  },

  createProjectDirectory: name => {
    fs.mkdirSync(name);
  },

  createProjectContent: (templatePath, projectPath) => {
    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
      const origFilePath = path.join(templatePath, file);
      const stats = fs.statSync(origFilePath);
      if (excludesDirFile.includes(file)) return;

      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        const writePath = path.join(projectPath, file);
        fs.writeFileSync(writePath, contents, 'utf8');
      } else if (stats.isDirectory()) {
        fs.mkdirSync(path.join(projectPath, file));
        files.createProjectContent(
          path.join(templatePath, file),
          path.join(projectPath, file),
        );
      }
    });
  },
};

module.exports = files;
