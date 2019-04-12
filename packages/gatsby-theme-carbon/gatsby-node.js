const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

// create expected directories
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, 'src/pages')];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};
