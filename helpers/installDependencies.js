const { execSync } = require('child_process');

function installDependencies() {
    console.log('Installing Bootstrap, React-Bootstrap, Sass and React-Hot-Toast');
    execSync('npm install bootstrap react-bootstrap sass react-hot-toast', { stdio: 'inherit' });
}

module.exports = installDependencies;
